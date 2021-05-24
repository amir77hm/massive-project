import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import './App.scss'

import Palette from "./Palette";
import seedColors from "./seedColors";
import ColorHelper from "./ColorHelper";
import PaletteList from "./PaletteList";

class App extends Component {

  findPalette = (id) => {
    return seedColors.find(palette => {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => <Palette palette={ColorHelper(this.findPalette(routeProps.match.params.id))} />}
        />
      </Switch>
    );
  }
}
export default App;
