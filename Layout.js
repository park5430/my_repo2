// React에서 제공하는 `Suspense` 컴포넌트를 불러옵니다.
import { Suspense } from "react";

// Header 컴포넌트를 불러옵니다.
import Header from "./Header";

// `Layout` 함수형 컴포넌트를 정의합니다.
// `children`은 해당 레이아웃에 포함되는 하위 컴포넌트들을 나타냅니다.
// `backBtn`은 Header 컴포넌트에 전달되는 props로, 이전 페이지로 돌아가는 버튼의 유무를 결정합니다.
const Layout = ({ children, backBtn }) => {
  return (
    // `Suspense` 컴포넌트를 사용하여 비동기적인 작업에 대한 로딩 상태를 처리합니다.
    <Suspense fallback={<div>Loading</div>}>
      {/* Header 컴포넌트를 렌더링합니다. backBtn prop을 전달하여 이전 페이지로 돌아가는 버튼의 유무를 결정합니다. */}
      <Header backBtn={backBtn} />

      {/* `children` prop에 해당하는 하위 컴포넌트들을 렌더링합니다. */}
      {children}
    </Suspense>
  );
};

// `Layout` 컴포넌트를 내보냅니다.
export default Layout;


// Layout 컴포넌트의 특징

// React 컴포넌트를 사용할 때, 기본적으로 컴포넌트는 <ComponentName /> 형식으로 사용됩니다. 
// 그러나 이 코드에서 <Layout> </Layout> 형태로 사용된 것은 
// React 컴포넌트의 자식 컴포넌트(children)를 포함하는 패턴 중 하나입니다.

// Layout 컴포넌트의 {children} 부분은 해당 레이아웃 안에 포함된 다른 컴포넌트들을 나타냅니다. 
// 이러한 방식으로 사용하면 Layout 컴포넌트로 
// 감싼 부분의 내용이 Layout 컴포넌트의 {children} 자리에 들어가게 됩니다.

// Layout 컴포넌트를 사용하는 예제
{/* <Layout backBtn={true}>
  <div>
    <h1>Hello, World!</h1>
    <p>This is the content of the page.</p>
  </div>
</Layout> */}