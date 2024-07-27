import type { FormatData, SourceTable } from '../types';

export const parseTable = (sourceTable: SourceTable): FormatData[] => {
  return sourceTable.data.reduce<FormatData[]>((formatDataList, dataGroup) => {
    const formatData = sourceTable.columns.reduce<FormatData>(
      (formatData, { key }, index) => {
        formatData[key] = dataGroup[index];
        return formatData;
      },
      {}
    );

    return formatDataList.concat(formatData);
  }, []);
};
