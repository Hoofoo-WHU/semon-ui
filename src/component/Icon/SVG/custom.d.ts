declare module "*.svg" {
  import * as React from 'react';
  const content: (props: React.SVGProps<SVGSVGElement>) => React.ReactSVGElement
  export default content;
}
