import _ from 'lodash';

class Typography {
  text10 = {
    fontSize: 64,
    fontWeight: '100',
    lineHeight: Math.floor(64 * 1.4),
    fontFamily: undefined,
  };
  text20 = {
    fontSize: 50,
    fontWeight: '100',
    lineHeight: Math.floor(50 * 1.4),
    fontFamily: undefined,
  };
  text30 = {
    fontSize: 36,
    fontWeight: '200',
    lineHeight: Math.floor(36 * 1.3),
    fontFamily: undefined,
  };
  text40 = {
    fontSize: 28,
    fontWeight: '300',
    lineHeight: Math.floor(28 * 1.21),
    fontFamily: undefined,
  };
  text50 = {
    fontSize: 22,
    fontWeight: '300',
    lineHeight: Math.floor(22 * 1.27),
    fontFamily: undefined,
  };
  text60 = {
    fontSize: 20,
    fontWeight: '300',
    lineHeight: Math.floor(20 * 1.2),
    fontFamily: undefined,
  };
  text70 = {
    fontSize: 17,
    fontWeight: '300',
    lineHeight: Math.floor(17 * 1.29),
    fontFamily: undefined,
  };
  text80 = {
    fontSize: 15,
    fontWeight: '300',
    lineHeight: Math.floor(15 * 1.33),
    fontFamily: undefined,
  };
  text90 = {
    fontSize: 13,
    fontWeight: '300',
    lineHeight: Math.floor(13 * 1.38),
    fontFamily: undefined,
  };
  text100 = {
    fontSize: 11,
    fontWeight: '300',
    lineHeight: Math.floor(11 * 1.18),
    fontFamily: undefined,
  };

  /**
   * Load custom set of typographies
   * arguments:
   * typographies - map of keys and typography values
   * e.g {text15: {fontSize: 58, fontWeight: '100', lineHeight: Math.floor(58 * 1.4)}}
   */
  loadTypographies(typographies) {
    _.forEach(typographies, (value, key) => {
      this[key] = value;
    });
  }

  getKeysPattern() {
    return new RegExp(_.chain(this)
        .keys()
        .map(key => [`${key}`])
        .flatten()
        .join('|')
        .value());
  }
}

export default new Typography();
