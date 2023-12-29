
// context는 props drilling이라는 문제 해결을 위해 개발되었습니다
// 2단계 이상 데이터 전달이 불가능, 즉 자손에게 전달 불가
// body, main, sidebar 전부 한번에 값을 전달해야 한다면?

// props drilling 이 props전달과정이 드릴로 땅을 파는 그런느낌
// 노가다 해도 되는데 데이터 교환 구조파악이 어렵게 됩니다
// 데이터 교환 구조파악이 어렵다 = 코드 유지보수 불가

// 코드 파일 50개 넘어가요

// context는 문맥이란 뜻입니다. 글이 가진 방향성
// a와 b는 문맥이 같다 = 둘이 전달하는 뜻이 같고 목적도 동일하다
// todoeditor, todolist, todoitem 전부 "일정관리"라는 같은 문맥에 있습니다
// context를 쓰면 같은 문맥그룹으로 묶어서  값을 공유할 수 있습니다

// context API 
// context API는 리액트의 기능이므로 리액트에서 React 객체를 불러옵니다
import React, {useContext} from 'react';
// React 객체에서 createContext매서드를 호출해 새로운 context를 만듭니다
// 인수로 전달하는 값은 context의 기본값이다
const Mycontext = React.createContext(defaultValue); 

// Mycontext.Provider를 App컴포넌트의 자식으로 배치합니다
// 이제 provider가 설정한 자식, 자손 컴포넌트 들은 
// 이제 Mycontext 소속으로 묶여서 이 객체에서 제공하는 데이터를
// 사용할 수 있습니다
// app이 props로 데이터를 주면 Mycontext가 받아서
// Mycontext소속 컴포넌트 들이 데이터를 공급받습니다
function App () {
const data = 'data';
return (
    <div>
        <Mycontext.Provider value={data}>
            <body />
        </Mycontext.Provider>
    </div>
)
}

function Main() {
    const data = useContext(Mycontext);
}
// 리액트 막내 useContext: 특정 context가 공급하는 데이터를 불러오는
// 리액트 훅입니다

// 현재 일정관리 앱 분석 결과,
// app은 할일 데이터인 state변수 todo, 할일을 관리하는 함수
// onCreate, onUpdate, onDelete를 Mycontext.Provider에 전달

// 기존의 문제는 일정관리 데이터 & 함수를 TodoList를 통해서 받았죠


// 리액트를 간단하게 정리하자면

// 내가 스프레드 연산자와 구조분해 할당 이야기를 많이했죠?
// 저 두가지 기능으로 객체화된 데이터에서 
// 원하는 요소를 꺼낼 수 있습니다
// map함수도 그렇고요
// push, pop, concat

// 날짜객체 처리법도 복습 new Date()
// 흔히 다루는 데이터의 종류: 숫자, 문자, 날짜
// 컴포넌트 안에 객체형 데이터 쓸 때 주의하세요 arrayA.b 뭔지 아시죠?

// props의 개념
// 부모 컴포넌트에서 전달할 값을 지정한 후에
// 자식 컴포넌트가 props라는 이름으로 인수를 받아서 함수를 실행

// 전달할 값의 지정 예시
// 부모 컴포넌트 App.js안에 자식 컴포넌트 Body.js에 전달할 데이터 세팅
// const name = "이기현";
// <Body {...bodyProps} />

// const bodyProps = {
// name: "이기현",
// location: "인천시",
// }

// 그러면 Body.js 자식 컴포넌트 함수에서는
// function Body (props) {} 저런식으로 부모가 전달할 데이터를 인수로 받음
// props에서 데이터 객체화 시 장점이 여러가지 keys값을 효과적으로 전달

// Props는 컴포넌트(함수)도 전달 가능합니다~

// 아래가 전달하고픈 컴포넌트라 가정 합시다
// function ChildComp() { return <div>자식컴포넌트에여</div>;}

// 부모 컴포넌트 App.js안에 자식 컴포넌트 ChildComp입력

// function App() {
// <body>
// <ChildComp />
// </body>
// }
// ChildComp를 물려받을 자식함수는 props의 처리방식대로 
// 받을 인수를 세팅합니다. 단, 함수를 받는 것이므로
// 객체처리 즉, 중괄호를 써야 합니다.
// 아래는 자식컴포넌트 함수의 일부분입니다.
// function Body ({Children}) {return <div>{Children}</div>;}
// props로 물려받은 자식 컴포넌트 그 자체를 위 처럼 화면에 표시합니다.

// 과거에 이벤트 함수 처리방식 기억하시나요?
// 버튼 클릭, 화면 값 입력 등, 이벤트 발생시 준비된 이벤트 핸들러
// 자바스크립트 함수가 실행되면서 홈페이지의 원하는 기능을 실행
// 했잖아요?

// 리액트에서 이벤트 핸들러 스크립트 부를때도
// <button onClick={handleOnClick}>클릭하세요</button>
// 자바스크립트 함수를 중괄호로 감쌌네요 ㅎㅎ
// 리액트는 대소문자 구분하다보니 이전에 html에서 그냥 onlick하던것이
// 대소문자 구분을 하고 있습니다. 참고하세요
// 글고 원래 따옴표로 감쌌던거 아시죠?
// state 상태의 이해 (데이터 처리의 정석)
// 리액트 훅스 6가지 중 useState가 근간이 됩니다.

// const [count, setCount] = useState(초기값);
// 초기값에 0입력, 유저가 버튼 100을 클릭
// 상태업데이트 변수 setCount -> 100증가
// count = 현재상태 + setCount = 0 + 100 = 100
// 유저가 10을 다시 눌렀다면
// setCount -> 10증가
// count = 현재상태 + setCount = 100 + 10 = 110

// useState를 useReducer로 바꾸는 실습을 하엿습니다
// 코드 리팩토링과 상태변화 코드를 따로 메인함수 외부에서 관리하기 위함이죠
// useReducer로 코드를 따로 분리했을 때, 케이스 별 상황처리를
// 스위치 구문으로 나타낼 수 있는걸 보셨습니다.

// useState: 데이터의 상태변화
// useRef: DOM요소의 직접 조작, 포커스 기능 구현 파트를 기억해 주세요~
// useEffect: state값이 바뀔 때마다 변경값을 출력
// state가 정확히 의도대로 반영되었는지 진단
// =디버그
// useReducer: 상태변화 코드의 분리 - 유지보수차원
// 코드 리팩토링. 원래 state를 활용한 상태변화 코드는
// state 속한 함수 밖으로 못나가요
// = state관리를 컴포넌트 내부가 아닌 외부에서 할 수 있게 하는 리액트 훅스의 기능
// useMemo: MEMOIZATION원리를 활용
// useCallback: CRUD기능 구현 예제를 중심으로 설명했을 때,
// 불필요한 ondelete, onupdate 등 작업과 상관없는 함수가 불필요하게 재실행되는 것을 방지
// --> 컴포넌트가 리렌더 될때 내부 작성함수가 불필요하게 다시 생성되는 것을 막는다.
// 불필요하게 생성을 막다보니 
// const memoizedFunc = useCallback(func, []);
// 데이터의 흐름과 이동을 처리하는 내부 작성함수를 관리하는 방법으로 state의 효과적인 사용을 돕는다.

// useContext: 기존 props의 props drilling문제 해결
// 일정관리 CRUD기능으로 상태변화 CRUD코드와 데이터 파트로
// CONTEXT를 나누어서 문제 해결
// 최적화 기능의 일부


// useState:, REACT.MEMO, useRef:
// CRUD**** 



// 현재까지의 리액트 기능의 흐름 정리
// 1. 컴포넌트
// 2. props, 원하는 DOM요소 접근 useRef
// 3. state통한 데이터처리 useState
// 4. state에 대한 결과진단 useEffect
// 5. 상태변화 코드 분리 등 코드 리팩토링 useReducer
// 6. 최적화 (MEMOIZATION원리를 활용) useMemo
// 불필요한 화면고침, 함수사용, 데이터 전달 시 불필요한 컴포넌트 리프레시 React.memo
// useCallback: 최적화를 위한 기능이다
// useContext: 최적화를 위한 기능이다2







