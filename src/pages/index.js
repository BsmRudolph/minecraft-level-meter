import * as React from "react";
import { Container, TextField, Typography } from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Seo from "../components/seo";

const meterDescription = {
  marginTop: "-40px",
  marginBottom: "40px",
  color: "rgba(0, 0, 0, 0.54)",
};

const getTotalExp = (n) => {
  if (n < 16) {
    return 17 * n;
  }
  if (n < 31) {
    return 1.5 * n * n - 29.5 * n + 360;
  }
  return 3.5 * n * n - 151.5 * n + 2220;
};
/*
const getNextExp = (n) => {
  if (n < 15) {
    return 17;
  }
  if (n < 30) {
    return 3 * n - 28;
  }
  return 7 * n - 148;
};
*/
class LevelMeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 0,
      targetLevel: 1000,
    };
  }
  componentDidMount() {
    const current = localStorage.getItem("currentLevel");
    if (current)
      this.setState({
        currentLevel: current,
      });
    const target = localStorage.getItem("targetLevel");
    if (target)
      this.setState({
        targetLevel: target,
      });
  }
  handleCurrentChange = (e) => {
    this.setState({
      currentLevel: e.target.value,
    });
    localStorage.setItem("currentLevel", e.target.value);
  };
  handleTargetChange = (e) => {
    this.setState({
      targetLevel: e.target.value,
    });
    localStorage.setItem("targetLevel", e.target.value);
  };
  toLocalString(n) {
    return n.toLocaleString();
  }
  render() {
    const currentLevel = Math.max(parseInt(this.state.currentLevel) || 0, 0);
    const targetLevel = Math.max(parseInt(this.state.targetLevel) || 1, 1);
    const maxLevel = Math.max(currentLevel, targetLevel);
    const exp = [];
    for (var i = 0; i <= maxLevel; i++) {
      exp[i] = getTotalExp(i);
    }
    const currentExp = exp[currentLevel];
    const targetExp = exp[targetLevel];
    const requiredExp = Math.max(targetExp - currentExp, 0);
    const progress = currentLevel < targetLevel ? Math.round((currentExp / targetExp) * 10000) / 100 : 100;

    return (
      <Container maxWidth="xs">
        <h1 align="center">HUMATANPE METER</h1>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            trailColor: "#eee",
          })}
        />
        <div align="center" style={meterDescription}>
          <Typography variant="caption">
            累積経験値: {this.toLocalString(currentExp)} / {this.toLocalString(targetExp)}
          </Typography>
        </div>
        <form noValidate autoComplete="off">
          <div align="center">
            <TextField id="current-level" label="現在のレベル" type="number" value={this.state.currentLevel} onChange={this.handleCurrentChange} />
          </div>
          <div align="center">
            <TextField id="target-level" label="目標のレベル" type="number" value={this.state.targetLevel} onChange={this.handleTargetChange} />
          </div>
        </form>
        <div align="center" style={{ marginTop: "50px", color: "rgba(0, 0, 0, 0.54)" }}>
          <div>
            <Typography variant="caption">敵を倒す場合はあと {this.toLocalString(Math.round(requiredExp / 5) || 0)} 体くらいです。</Typography>
          </div>
          <div>
            <Typography variant="caption">石炭を探す場合はあと {this.toLocalString(Math.round(requiredExp / 1) || 0)} 個くらいです。</Typography>
          </div>
        </div>
      </Container>
    );
  }
}
// markup
const IndexPage = () => {
  return (
    <main style={{ minWidth: "320px" }}>
      <Seo />
      <LevelMeter></LevelMeter>
    </main>
  );
};

export default IndexPage;
