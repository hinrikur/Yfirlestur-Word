import * as React from "react";
import PropTypes from "prop-types";

import MenuButton from "./MenuButton";
import Header from "./Header";
import HeroList from "./HeroList";
import Progress from "./Progress";
import { getPars, debugCorrectDocument } from "../utils/debug-tools";

/* global Word, require */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: "Search",
          primaryText: "Bendir á stafsetningarvillur",
        },
        {
          icon: "Error",
          primaryText: "Kemur auga á samhengisháðar villur",
        },
        {
          icon: "TextDocument",
          primaryText: "Finnur ýmis málfræðileg atriði",
        },
      ],
    });
  }

  click = async () => {
    return Word.run(async (context) => {
      /**
       * Insert your Word code here
       */

      // insert a paragraph at the end of the document.
      const paragraph = context.document.body.insertParagraph("", Word.InsertLocation.end);

      // change the paragraph color to blue.
      paragraph.font.color = "blue";

      await context.sync();
    });
  };

  debugClick = async () => {
    console.log("Debug click init");
    debugCorrectDocument();
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }

    return (
      <div className="home-menu">
        <Header logo={require("./../../../assets/logo-filled.png")} title={this.props.title} message="Yfirlestur" />
        <HeroList message="Viðbót sem rýnir íslenskan texta." items={this.state.listItems}>
          <p className="ms-font-l">Hvað viltu láta lesa yfir?</p>
        </HeroList>

        <div className="home-menu-buttons">
          <MenuButton onClick={this.click} id="buttonCheckDoc" text="Lesa yfir allt skjalið" />
          <MenuButton onClick={this.click} id="buttonCheckPar" text="Lesa yfir valda efnisgrein" />
          <MenuButton onClick={this.debugClick} id="buttonDebug" text="Debug"></MenuButton>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};
