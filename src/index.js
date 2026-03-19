import "./styles.css";
import { renderBoard, randomizeButton } from './modules/controller/domController.js';

renderBoard("player-board");
renderBoard("computer-board");

randomizeButton();