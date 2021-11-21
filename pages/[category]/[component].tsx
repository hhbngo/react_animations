import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import c from './ComponentPage.module.css';
import { CATAGORIES, DATA } from '@constants';
import { CopyBlock, dracula } from 'react-code-blocks';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef } from 'react';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = CATAGORIES.map((c) =>
    c.subs.map((e) => ({ category: c.main, component: e }))
  ).flat();

  return {
    paths: paths.map((p) => ({
      params: { category: p.category, component: p.component },
    })),
    fallback: false,
  };
};

export const getStaticProps = ({
  params,
}: GetStaticPropsContext<{
  category: string;
  component: string;
}>) => {
  const category = params!.category;
  const component = params!.component;

  return {
    props: {
      category,
      componentName: component,
    },
  };
};

export default function ComponentPage({
  category,
  componentName,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    component: Component,
    containerStyles = {},
    code,
    css,
  } = DATA[category][componentName];

  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handlePageChange = () => {
      if (ref.current) {
        ref.current.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeComplete', handlePageChange);

    return () => {
      router.events.off('routeChangeComplete', handlePageChange);
    };
  }, []);

  return (
    <div className={c.container} ref={ref}>
      <h1>
        {category} / <span>{componentName}</span>
      </h1>
      <div className={c.component_showcase}>
        <div style={{ ...containerStyles }}>
          <Component />
        </div>
      </div>
      <div className={c.code_section}>
        <h2>Code</h2>
        <CopyBlock
          text={code}
          language="jsx"
          showLineNumbers={true}
          theme={dracula}
        />
        <br />
        <h2>
          {componentName.charAt(0).toUpperCase() + componentName.slice(1)}
          .module.css
        </h2>
        <CopyBlock
          text={css}
          language="css"
          showLineNumbers={true}
          theme={dracula}
        />
      </div>
    </div>
  );
}
