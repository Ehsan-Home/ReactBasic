function Course() {
  console.log("test");
  return (
    // React.createElement("div", { className: "course" },
    // React.createElement("h2", null, "React course"),
    // React.createElement("p", null, "Fun")));
    <div class="course">
        <h2>Semantic course</h2>
        <p>Fun too!</p>
    </div>
  );
}

ReactDOM.render(React.createElement(Course, null),
document.querySelector('#c1'));




// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }


// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);