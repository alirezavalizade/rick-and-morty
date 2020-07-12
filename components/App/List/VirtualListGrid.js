import chunk from 'lodash.chunk';

import { useMemo, useRef, useState, useEffect } from 'react';
import { useWindowSize } from '@hooks';

import {
  WindowScroller,
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized';

const getDataBasedOnGridSize = (width, data, minGridWidth) => {
  // 100 is for paddings and margins
  return chunk(data, Math.floor((width - 100) / minGridWidth));
};

const VirtualListGrid = ({
  data: dataProps,
  renderRow,
  minGridWidth = 250
}) => {
  const { width } = useWindowSize();
  const [data, setData] = useState(() => {
    return getDataBasedOnGridSize(width, data, minGridWidth);
  });

  const list = useRef(null);
  const [cache] = useState(() => {
    return new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 250
    });
  });

  useEffect(() => {
    cache.clearAll();
    list.current.forceUpdateGrid();
  }, [dataProps, data, width, cache]);

  useEffect(() => {
    setData(getDataBasedOnGridSize(width, dataProps, minGridWidth));
  }, [width, dataProps.length, dataProps[0], dataProps[1]]);

  const rowRenderer = ({ index, key, style, parent, isScrolling }) => {
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        rowIndex={index}
        parent={parent}
      >
        {({ measure, registerChild }) => (
          <div ref={registerChild} style={style}>
            {renderRow({ data: data[index], measure, isScrolling, index })}
          </div>
        )}
      </CellMeasurer>
    );
  };

  return useMemo(() => {
    return (
      <WindowScroller>
        {({ height, registerChild, onChildScroll, scrollTop, isScrolling }) => (
          <AutoSizer disableHeight>
            {({ width: w }) => (
              <div ref={registerChild}>
                <List
                  ref={list}
                  autoHeight
                  height={height || 0}
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                  deferredMeasurementCache={cache}
                  overscanRowCount={5}
                  rowCount={data.length}
                  rowRenderer={rowRenderer}
                  scrollTop={scrollTop}
                  width={w}
                  rowHeight={cache.rowHeight}
                />
              </div>
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    );
  }, [data, width]);
};

export default VirtualListGrid;
