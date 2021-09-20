/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import moment from 'moment';
import * as services from './services';
import {endpoints} from './endpoints';
import * as config from './config';
import {getAppFont, monthDayYear, numberFormat, theme} from './theme';

const getFullUrl = (endpoint, api_prefix = 'api') => {
  if (__DEV__ && config.LIVE_API_TESTING === false) {
    return `${config.SERVER_URL_UAT}${api_prefix}${endpoint}`;
  }
  return `${config.SERVER_URL_PRD}${api_prefix}${endpoint}`;
};

const getFullUrlPM = (endpoint, api_prefix = 'api') => {
  if (__DEV__ && config.LIVE_API_TESTING === false) {
    return `${config.SERVER_URL_UAT_PM}${api_prefix}${endpoint}`;
  }
  return `${config.SERVER_URL_PRD_PM}${api_prefix}${endpoint}`;
};

const getFormattedDate = (date = undefined) =>
  moment(date).format('YYYY-MM-DD HH:mm:ss');

export {
  config,
  endpoints,
  getFullUrl,
  services,
  getFormattedDate,
  getAppFont,
  monthDayYear,
  numberFormat,
  getFullUrlPM,
  theme,
};

export const stripHtmlTags = str => {
  if (str) {
    let out = str.replace(/(<([^>]+)>)/gi, '');
    out = out.replace(/&nbsp;/g, ' ');
    return out;
  }
  return null;
};
