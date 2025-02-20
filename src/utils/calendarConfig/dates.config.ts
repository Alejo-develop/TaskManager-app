export interface MarkedDates {
  [key: string]: {
    customStyles: {
      container: {
        backgroundColor: string;
      };
      text: {
        color: string;
        fontWeight: string;
      };
    };
  };
}