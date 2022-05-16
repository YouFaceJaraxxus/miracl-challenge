interface IHeaderTab {
  id: number;
  title: string;
  route: string;
  protected: boolean;
};

interface IHeaderSetting {
  id: number;
  title: string;
  action: Function;
  protected: boolean;
}

export type {
  IHeaderTab,
  IHeaderSetting
}