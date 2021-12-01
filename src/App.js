import logo from './logo.svg';
import './App.css';
import './common.css';
import './style.css';

function App() {
  const name = '리액트';
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
      </nav>
    </>
  );
}

export default App;
