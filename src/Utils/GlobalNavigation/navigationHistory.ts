type NavigateFunction = (page: string, ...rest: any[]) => void;

const Navigator = {
  navigate: null as NavigateFunction | null,
  push: (page: string, ...rest: any[]) => {
    if (Navigator.navigate) {
      Navigator.navigate(page, ...rest);
    }
  },
};

export default Navigator;
