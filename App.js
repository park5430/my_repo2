// CRUD 기능의 대표적인 구현 방법은 REACT HOOKS 중에 useState입니다
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useReducer, useRef } from "react";
import TestComp from "./component/TestComp";

// 가짜 json형식의 데이터 객체를 형성하여 crud로직을 만들고
// 실제데이터를 갈아끼우는 형태로 개발하시면 됩니다
// useState를 useReducer로 대체하면서 컴포넌트 내 
// 상태변화 코드를 정리하였습니다
// 복잡한 상태변화가 필요한 경우에도 컴포넌트 내부를 간결하게 유지가능합니다

const mockTodo = [
  {
    id: 0,
    inDone: false,
    content: "react 공부",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    inDone: false,
    content: "개발자 되기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    inDone: false,
    content: "자료 다운로드",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      // action.type이 스위치문 기준으로 "UPDATE"일때, 수정할 상태변화 코드작성
      // action.targetId와 id를 비교해 일치하는 아이템의 isDone 관련
      // 새 배열데이터를 리턴합니다
      return state.map((it) => 
      it.id === action.targetId ? { ...it, isDone: !it.isDone,} : it)
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}


function App() {
  // useRef의 초기값을 3으로 설정한 이유는
  // 우리가 생성한 가짜데이터 id가 2로 끝나서입니다
  const idRef = useRef(3);
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      }
    });
    idRef.current += 1;
  };

  // targetId는 체크여부로 스케줄을 달성 여부 데이터를 수정하는
  // 데이터의 id를 설정합니다.
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    })
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    })
  };
  return (
    <div className="App">
      <TestComp />
      <Header />
      <TodoEditor onCreate={onCreate} />
      {/* 배열 todo를 TodoList 컴포넌트에 
      props로 전달합니다 */}
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
