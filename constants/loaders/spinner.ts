import { Spinner } from '@components/loaders';

export default {
  component: Spinner,
  code: `const Spinner = () => {
    return <div className={spinner}></div>
}`,
  css: `.spinner {
  grid-area: spinner;
  font-size: 4px;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #000000;
  background: linear-gradient(to right, #000000 10%, rgba(0, 0, 0, 0) 42%);
  position: relative;
  animation: load3 1.4s infinite linear;
  transform: translateZ(0);
}
    
.spinner:before {
  width: 50%;
  height: 50%;
  background: #000000;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
    
.spinner:after {
  background: white;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
    
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
    
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
    
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
    
  100% {
    -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
  }
}`,
};
