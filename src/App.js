import logo from './logo.svg';
import './App.css';
import './common.css';
import './style.css';
import MyComponent from './MyComponent';
import testDefault from './testDefault';

function App() {
  const name = '리액트';
  // const App = () => {
  //   return <testDefault/>
  // }
  var test ='React';  
  return (
    <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <nav>
      <ul>
        <li className="ul_title">React 처음부터 공부하기 Project</li>
        <li className="dots_p">React에서 기본적인 문법 작성은 html과 같다. 다만 js파일 안에 작성 시 꼭 '〈###〉〈/###〉' 처럼 하나의 요소로 감싸주어야 한다.</li>
        <li className="dots_p">하나의 앨리먼트로 감싸는 방법은 다양하다. 〈div〉〈/div〉로 감싸줄 수 있으며 <span>React V16</span>이상에서는〈Frament〉〈/Frament〉으로 감싸줄 수 있으며 〈Frament〉〈/Frament〉은 〈〉〈/〉만으로도 표현할 수 있다.</li>
        <li className="dots_p">예외적으로 JSX가 한줄일 경우 따로 앨리먼트를 감싸주지 않아도 된다.</li>
      </ul>
      <ul>
        <li className="ul_title">React에 JavaScript 표현하기</li>
        <li className="dots_p">{test}({name})는 잘 작동되고있나?</li>
        <li className="dots_p">React에서 JavaScript를 표현할 때 변수 선언은 일반적인 JavaScript와 동일하다.</li>
        <li className="dots_p">
          <a href="Markdown/note1.md" target="_blank">MarkDown보러가기(링크이동조차 달라서 구현못함)</a>
        </li>
      </ul>
      <ul>
        <li className="ul_title">if 문 대신 조선부 연산자</li>
        <li className="dots_p">JSX내부에서 JavaScrip의 if문을 사용할 수는 없다. 만약 상황에 따라 if문을 사용해야 한다면 JSX외부에서 if문을 사용하여 사전에 값을 설정하거나｛｝안에조건부 연산자를 사용하면 된다.</li>
        <li className="dots_p">
          <a href="Markdown/note2.md" target="_blank">MarkDown보러가기(링크이동조차 달라서 구현못함)</a>
          
        </li>
      </ul>
      <ul>
        <li className="ul_title">AND 연산자(&&)를 사용한 조건부 렌더링</li>
        <li className="dots_p">Grammar_1.js,Grammar_2.js,Grammar_3.js</li>
      </ul>
      <ul>
        <li className="ul_title">undifined를 렌더링하지않기</li>
        <li className="dots_p">React에서 undifined만 반환하여 렌더링하는 상활을 만들면 오류가 출력된다.</li>
        <li className="link_par">오류코드 보러가기</li>
        <li className="dots_p">어떤 값이 undifined일 수 있다면 OR(||) 연사자를 사용하묜 해당 값이 undifined일 떄 사용할 값을 지정할 수 있으므로 오류코드 송출을 방지할 수 있다.</li>
        <li className="link_par">undifined 출력 보러가기</li>
        <li className="dots_p">단 JSX내부에서 undifined를 선언하면 정상작동된다.</li>
        <li className="dots_p">만약 변수의 값이 undifined일 때 부여줄 문구가 있다면 <span className="point_f">return 〈div〉{name || '출력할 메시지'}〈/div〉</span>로 입력해주면 된다.</li>
      </ul>
      <ul>
        <li className="ul_title">InlineStyle 작성방법</li>
        <li className="dots_p">inline style작성방법은 문자열 형태로 넣어주는 것이 아닌 객체형태로 넣어주어야 한다.</li>
        <li className="dots_p">만약 style중에 background-color 처럼 '-' 이 들어가면 '-'대신 대문자로 작성한다.</li>
        <li className="dots_p">즉 background-color 이 아닌 backgroundColor 로 작성해준다.</li>
        <li className="link_par">InlineStyle 작성 보러가기(객체 미리 선언)</li>
        <li className="link_par">InlineStyle 작성 보러기가(style값 바로 지정하기)</li>
      </ul>
      <ul>
        <li className="ul_title">꼭 닫아야 하는 태그</li>
        <li className="dots_p">HTML 코드중에서 닫지 않아도 정상작동하는 태그들이 있다.</li>
        <li className="dots_p">예를들어 '〈br〉' 이나 '〈input〉'태그들인다 JSX에서는 이런 태그들도 닫지않으면 콘솔에서부터 오류가 출력된다.</li>
        <li className="link_par">오류코드 보러가기</li>
        <li className="dots_p">만약 태그 사이에 별도의 내용이 들어가지 않는다면 <span className="point_f">〈div/〉</span> 처럼 표시할 수 있다.</li>
      </ul>
      <ul>
        <li className="ul_title">주석 달기</li>
        <li className="dots_p">JSX에서 주석을 작성하는 법은 <span className="point_f">｛/* 주석내용입력 */｝</span>이런식으로 작성한다.</li>
        <li className="dots_p">일반적인 주석 작성인 // 이나 /* */ 는 페이지에 그대로 출력된다.</li>
        <li className="dots_p">만약 시작태그를 여러줄로 작성하게 된다면 // 의 사용이 가능하다.</li>
        <li className="link_par">주석 작성코드 보러가기</li>
      </ul>
      <ul>
        <li className='ul_title'>클래스형 컴포넌트</li>
        <li className='dots_p'>현재까지 사용했던 컴포넌트는 함수형 컴포넌트이며 코드는 <span className="inner_link_par">해당문서</span>와 같이 이루어져 있다.</li>
        <li className='dots_p'>컴포넌트를 선언하는 방법은 두가지가 있는데 하나는 함수형 컴포넌트이고, 또 다른 하나는 클래스형 컴포넌트이다.</li>
        <li className='link_par'>클래스형 컴포넌트 코드 보러가기</li>
        <li className='dots_p'>컴포넌트가 클래스형으로 바뀌었지만 역할은 이전에 보았던 함수형 컴포넌트와 똑같다.</li>
        <li className='dots_p'>다만 클래스형 컴포넌트와 함수형 컴포넌트의 차이점은 클래스형 컴포넌트에서는 state 기능 및 라이프사이클 기능을 사용할 수 있다는 점과 임의의 메서드를 정의할 수 있다는 점이 있다.</li>
        <li className='dots_p'>클래스형 컴포넌트에서는 반드시 render 함수가 꼭 있어야 하고 그 안에서 보여 주어야 할 JSX를 반환해야 한다.</li>
      </ul>
      <ul>
        <li className='ul_title'>함수형 컴포넌트의 장점</li>
        <li className='dots_p'>클래스형 컴포넌트보다 쉬운 작성법</li>
        <li className='dots_p'>클래스형 컴포넌트보다 메모리자원을 적게 사용</li>
        <li className='dots_p'>프로젝트 완성 후 빌드하여 배포를 할 경우 파일크기가 더 작음</li>
      </ul>
      <ul>
        <li className='ul_title'>함수형 컴포넌트의 단점</li>
        <li className='dots_p'>state와 라이프사이클 API의 사용이 불가능하다.</li>
        <li className='dots_p'>단 리액트 v16.8 업대이트 이후 Hooks이라는 기능이 도입되면서 해결이 되었다.</li>
      </ul>
      <ul>
        <li className='ul_title'>컴포넌트 생성</li>
        <li className='dots_p'>컴포넌트를 만드려면 컴포넌트 코드를 선언해야 한다.</li>
        <li className='dots_p'>함수형 컴포넌트와는 다른 작성법을 사용하는데 함수형 컴포넌트에선 function 키워드를 사용하였지만 클래스형 컴포넌트에서는 <span className="point_f">() =&gt; {}</span>를 사용하여 함수를 만들어준다.</li>
      </ul>
      <ul>
        <li className='ul_title'>모듈 내보내기(export)</li>
        <li className='dots_p'>클래스형 컴포넌트에서 맨아래 코드는 'export default $$$$' 로 이루어져 있다.</li>
        <li className='dots_p'>이 코드는 다른 파일에서 이 파일을 improt할 때 위에서 선언한 $$$ 클래스를 불러오도록 설정한다.</li>
      </ul>
      <ul>
        <li className='ul_title'>모듈 불러오기(import)</li>
        <li className='dots_p'>클래스형 컴포넌트를 불러올 때는 기존에 사용하는 function을 사용하는게 아니라 화살표형 함수를 사용한다.</li>
        <li className='linl_par'>코드 보러가기</li> {/* classcomponent.js */}
      </ul>
      <ul>
        <li className='ul_title'>props</li>
        <li className='dots_p'>props는  properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소이다. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.</li>
      </ul>
      <ul>
        <li className='ul_title'>JSX 내부에서 props렌더링</li>
        <li className='dots_p'>props 값은 컴포넌트 함수의 파라미터로 받아 와서 사용할 수 있다. props를 렌더링 할 때 JSX 내부에서 {}기호로 감싸주면 된다.</li>
      </ul>
      <ul>
        <li className='ul_title'>컴포넌트를 사용할 때 props 값 지정하기</li>
        <li className='dots_p'>props 값을 따로 지정하지 않았을 때 보여질 기본값을 설정하는 방법</li>
        <li className='dots_p'>props 기본값 : defaultProps</li>
        {/* <li className='dots_p'><testDefault></testDefault></li> */}
      </ul>
      </nav>
    </>
  );
}

export default App;
