const _0x18f239 = _0x2715;
function _0x2715(_0x44c5d3, _0x1e52cb) {
  const _0x2daca8 = _0x2dac();
  return (
    (_0x2715 = function (_0x271550, _0x2c0601) {
      _0x271550 = _0x271550 - 0xea;
      let _0x3052b8 = _0x2daca8[_0x271550];
      return _0x3052b8;
    }),
    _0x2715(_0x44c5d3, _0x1e52cb)
  );
}
(function (_0x55eab0, _0x398a2d) {
  const _0x553fff = _0x2715,
    _0x33dc3e = _0x55eab0();
  while (!![]) {
    try {
      const _0x133a95 =
        (-parseInt(_0x553fff(0x113)) / 0x1) *
          (parseInt(_0x553fff(0xf2)) / 0x2) +
        (-parseInt(_0x553fff(0xf0)) / 0x3) * (parseInt(_0x553fff(0xf9)) / 0x4) +
        -parseInt(_0x553fff(0x118)) / 0x5 +
        (-parseInt(_0x553fff(0x10e)) / 0x6) *
          (parseInt(_0x553fff(0xea)) / 0x7) +
        (-parseInt(_0x553fff(0xf7)) / 0x8) * (parseInt(_0x553fff(0xfd)) / 0x9) +
        (parseInt(_0x553fff(0xfc)) / 0xa) * (parseInt(_0x553fff(0x109)) / 0xb) +
        parseInt(_0x553fff(0x100)) / 0xc;
      if (_0x133a95 === _0x398a2d) break;
      else _0x33dc3e["push"](_0x33dc3e["shift"]());
    } catch (_0x5bbfeb) {
      _0x33dc3e["push"](_0x33dc3e["shift"]());
    }
  }
})(_0x2dac, 0xaee3b);
const express = require(_0x18f239(0x103)),
  authController = require(_0x18f239(0x104)),
  bookingController = require(_0x18f239(0xf6)),
  propertyController = require(_0x18f239(0xf1)),
  router = express[_0x18f239(0xf4)]();
function _0x2dac() {
  const _0x11b2f7 = [
    "post",
    "get",
    "/forgotPassword",
    "/me",
    "3ygWwvh",
    "../controllers/propertyController",
    "4QCcEpP",
    "protect",
    "Router",
    "exports",
    "../controllers/bookingController",
    "16ogBjBv",
    "/resetPassword/:token",
    "217428wqJTzp",
    "/signup",
    "getcheckOutSession",
    "562930cqFboX",
    "3497301dwWFzc",
    "createProperty",
    "isLoggedIn",
    "30835512vuuseG",
    "forgotPassword",
    "/newAccommodation",
    "express",
    "../controllers/authController",
    "/myAccommodation",
    "/booking",
    "patch",
    "getBookingDetails",
    "33liQMji",
    "updateMe",
    "signup",
    "route",
    "/checkout-session",
    "6sipzYn",
    "/login",
    "/logout",
    "/updateMyPassword",
    "/booking/:bookingId",
    "2367FYfeiW",
    "/updateMe",
    "getUserBookings",
    "login",
    "logout",
    "4309800roHpLh",
    "2267503dIFrNJ",
    "getUsersProperties",
  ];
  _0x2dac = function () {
    return _0x11b2f7;
  };
  return _0x2dac();
}
router[_0x18f239(0x10c)](_0x18f239(0x102))[_0x18f239(0xec)](
  authController["protect"],
  propertyController[_0x18f239(0xfe)]
),
  router[_0x18f239(0x10c)](_0x18f239(0x10f))[_0x18f239(0xec)](
    authController[_0x18f239(0x116)]
  ),
  router[_0x18f239(0x10c)](_0x18f239(0xfa))[_0x18f239(0xec)](
    authController[_0x18f239(0x10b)]
  ),
  router[_0x18f239(0x10c)](_0x18f239(0xef))[_0x18f239(0xed)](
    authController[_0x18f239(0xff)]
  ),
  router[_0x18f239(0x10c)](_0x18f239(0x110))[_0x18f239(0xed)](
    authController[_0x18f239(0x117)]
  ),
  router[_0x18f239(0x10c)](_0x18f239(0x114))[_0x18f239(0x107)](
    authController[_0x18f239(0xf3)],
    authController[_0x18f239(0x10a)]
  ),
  router[_0x18f239(0x10c)](_0x18f239(0x111))[_0x18f239(0x107)](
    authController["protect"],
    authController["updatePassword"]
  ),
  router[_0x18f239(0x10c)](_0x18f239(0xee))["post"](
    authController[_0x18f239(0x101)]
  ),
  router[_0x18f239(0x10c)](_0x18f239(0xf8))[_0x18f239(0x107)](
    authController["resetPassword"]
  ),
  router[_0x18f239(0x10c)](_0x18f239(0x10d))[_0x18f239(0xec)](
    authController[_0x18f239(0xf3)],
    bookingController[_0x18f239(0xfb)]
  ),
  router[_0x18f239(0x10c)](_0x18f239(0x106))["get"](
    authController["protect"],
    bookingController[_0x18f239(0x115)]
  ),
  router["route"](_0x18f239(0x112))[_0x18f239(0xed)](
    authController[_0x18f239(0xf3)],
    bookingController[_0x18f239(0x108)]
  ),
  router[_0x18f239(0x10c)]("/booking/new")[_0x18f239(0xec)](
    authController[_0x18f239(0xf3)],
    bookingController["createBookings"]
  ),
  router[_0x18f239(0x10c)](_0x18f239(0x105))["get"](
    authController[_0x18f239(0xf3)],
    propertyController[_0x18f239(0xeb)]
  ),
  (module[_0x18f239(0xf5)] = router);
