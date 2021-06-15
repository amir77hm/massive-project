import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import './App.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Palette from "./Palette";
import seedColors from "./seedColors";
import ColorHelper from "./ColorHelper";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page"


class App extends Component {

  state = {
    palettes: JSON.parse(localStorage.getItem('palettes')) || seedColors
  }

  syncLocalStorage = () => {
    localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
  }

  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    )

  }

  findPalette = (id) => {
    return this.state.palettes.find(palette => {
      return palette.id === id
    })
  }

  deletePalette = (id) => {
    this.setState(prevState => ({
      palettes: prevState.palettes.filter((palette) => {
        return palette.id !== id
      })
    }),
      this.syncLocalStorage
    )
  }

  render() {
    return (
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="page"
          >
            <Switch location={location}>
              <Route
                path='/palette/:paletteId/:colorId'
                render={(routeProps) =>
                  <Page>
                    <SingleColorPalette
                      palette={ColorHelper(this.findPalette(routeProps.match.params.paletteId))}
                      paletteId={routeProps.match.params.paletteId}
                      colorId={routeProps.match.params.colorId}
                    />
                  </Page>
                }
              />
              <Route
                exact
                path='/palette/new'
                render={routeProps =>
                  <Page>
                    <NewPaletteForm
                      {...routeProps}
                      savePalette={this.savePalette}
                      palettes={this.state.palettes}
                    />
                  </Page>
                }
              />
              <Route
                exact
                path='/'
                render={routeProps =>
                  <Page>
                    <PaletteList
                      palettes={this.state.palettes}
                      routeProps={routeProps}
                      deletePalette={this.deletePalette}
                    />
                  </Page>
                }
              />
              <Route
                exact
                path='/palette/:id'
                render={(routeProps) =>
                  <Page>
                    <Palette
                      palette={ColorHelper(this.findPalette(routeProps.match.params.id))}
                    />
                  </Page>
                }
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    );
  }
}
export default App;
