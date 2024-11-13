import Image from "next/image"
import * as runtime from "react/jsx-runtime"

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

const Filename = ({ filename }: { filename?: string }) => {
  if (!filename) return null; // Return null if no name is provided
  return (
    <div className="mb-2 text-center">
      <span className="block mb-1 text-sm">{filename}</span>
    </div>
  );
};

const components = {
  h2: (props: any) => (
    <h2 className="text-2xl lg:text-4xl font-semibold mb-10 mt-14" {...props} />
  ),
  p: (props: any) => (
    <p className="text-base md:text-xl mb-6" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-primary hover:bg-primary hover:text-base-100"
      {...props}
    />
  ),
  pre: (props: any) => (
    <div className="relative my-6">
      <Filename filename={props.filename} /> {/* Pass filename dynamically */}
      <pre
        className="bg-gray-900 p-2.5 md:p-6 rounded-xl overflow-x-auto border border-gray-600"
        {...props}
      />
    </div>
  ),
  code: (props: any) => (
    <code
      className="bg-gray-900 p-1 rounded-xl"
      {...props}
    />
  ),
  figcaption: (props: any) => (
    <figcaption className="text-sm mt-2 text-center" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-500 pl-4 italic text-xl">
      {props.children}
    </blockquote>
  ),
  Image,
  Filename
  //Callout,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
