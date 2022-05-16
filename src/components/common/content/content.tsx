import IContentProps from './contentProps';
import { ContentTitle, ContentWrapper } from './contentStyle';

const Content = ({ children, title }: IContentProps) => {
  return (
    <ContentWrapper>
      {title &&
        <ContentTitle>
          {title}
        </ContentTitle>
      }
      {children}
    </ContentWrapper>
  );
}

export default Content;