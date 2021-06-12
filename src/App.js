import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import './App.scss'

import Palette from "./Palette";
import seedColors from "./seedColors";
import ColorHelper from "./ColorHelper";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component {

  state = {
    palettes: seedColors
  }

  savePalette = async (newPalette) => {
    await this.setState({ palettes: [...this.state.palettes, newPalette] })
  }

  findPalette = (id) => {
    return this.state.palettes.find(palette => {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>
        <Route
          path='/palette/:paletteId/:colorId'
          render={(routeProps) =>
            <SingleColorPalette
              palette={ColorHelper(this.findPalette(routeProps.match.params.paletteId))}
              paletteId={routeProps.match.params.paletteId}
              colorId={routeProps.match.params.colorId} />}
        />
        <Route
          exact
          path='/palette/new'
          render={routeProps =>
            <NewPaletteForm
              {...routeProps}
              savePalette={this.savePalette}
              palettes={this.state.palettes} />}
        />
        <Route
          exact
          path='/'
          render={routeProps =>
            <PaletteList
              palettes={this.state.palettes}
              routeProps={routeProps} />}
        />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) =>
            <Palette
              palette={ColorHelper(this.findPalette(routeProps.match.params.id))} />}
        />
      </Switch>
    );
  }
}
export default App;
