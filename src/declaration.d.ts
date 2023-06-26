declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.css' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

declare module 'lodash.debounce'