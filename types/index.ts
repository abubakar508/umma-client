export type CustomButtonProps = {
    title?: string;
    icon?: JSX.Element;
    btnType?: "button" | "submit";
    isDisabled?: boolean;
    containerStyles?: string;
    textStyles?: string;
    iconStyles?: string;
  };
  
  export type SectionContentProps = {
    containerStyles: string;
    textContainerStyles?: string;
    titleStyles: string;
    descStyles: string;
    imageStyles: string;
    title: string;
    desc: string;
    imageUrl: any;
    width: number;
    height: number;
    quality: number;
  };
  
  export interface AnchorProps {
    href: string
    title: string
  }