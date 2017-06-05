import { styler } from 'polythene-core-css';
import { componentConfig } from 'polythene-theme';
import vars from './config';
import layout from './layout';
import color from './color';

var configFn = componentConfig && componentConfig['spinner-ios'];
var config = configFn ? configFn(vars) : vars;
var id = 'pe-spinner-ios';

styler.add(id, layout(config), color(config));