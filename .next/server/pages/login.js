(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\nicho\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\login.js";









function Login() {
  let loginDetails = {
    username: "",
    password: ""
  };
  let errorMessage = "";
  const [cookie, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_8__.useCookies)(["user"]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3678029609",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: "jsx-3678029609",
        children: "DPSM-QA-PORTAL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/style.css",
        className: "jsx-3678029609"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
        crossorigin: "anonymous",
        className: "jsx-3678029609"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3678029609" + " " + "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "panel1",
        className: "jsx-3678029609" + " " + "col-md-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-3678029609" + " " + "img",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/logo.png",
            style: {
              padding: "25%",
              height: "100%"
            },
            className: "jsx-3678029609" + " " + "logopic"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-3678029609" + " " + "col-md-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-3678029609" + " " + "login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-3678029609" + " " + "container",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-3678029609" + " " + "img",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/user.png",
                id: "user",
                alt: "user",
                style: {
                  margin: "auto",
                  width: "150px",
                  height: "150px"
                },
                className: "jsx-3678029609"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
              className: "jsx-3678029609"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "jsx-3678029609",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "jsx-3678029609",
                children: "QUALITY ASSURANCE PORTAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              className: "jsx-3678029609",
              children: "University of the Philippines Manila"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
              className: "jsx-3678029609"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              id: "login",
              className: "jsx-3678029609",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
                initialValues: loginDetails,
                onSubmit: async values => {
                  try {
                    let token = null;
                    const tokenRes = await axios__WEBPACK_IMPORTED_MODULE_5___default().post("http://localhost:3001/api" + "/login", {
                      upemail: `${values.username}`,
                      password: `${values.password}`
                    });

                    if (tokenRes.data.success) {
                      setCookie("user", tokenRes.data.result.token, {
                        path: "/",
                        maxAge: 3600,
                        // Expires after 1hr
                        sameSite: true
                      });
                      token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default().decode(tokenRes.data.result.token);
                      let role = token.role;

                      if (role == 1) {
                        // faculty 
                        next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/faculty/basic-info');
                      } else if (role == 2 || role == 3) {
                        // unit head or dept. chair
                        next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/faculty');
                      } else if (role == 5) {
                        //admin
                        next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/admin');
                      }
                    } else {
                      window.alert('something wrong');
                    }
                  } catch (err) {
                    console.error(err.response.data.errors[0].message);
                    errorMessage = err.response.data.errors[0].message;
                    let alert = document.getElementById("alert");
                    alert.setAttribute("style", "visibility: visible");
                    values.username = "";
                    values.password = "";
                    return err;
                  }
                },
                children: ({
                  values,
                  errors,
                  touched,
                  isSubmitting
                }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "jsx-3678029609" + " " + "login-form",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
                    action: "",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                      type: "email",
                      placeholder: "UP Mail",
                      id: "username",
                      name: "username"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 17
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
                      type: "password",
                      placeholder: "Password",
                      id: "password",
                      name: "password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 17
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                      className: "jsx-3678029609"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 17
                    }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                      className: "jsx-3678029609"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 24
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "jsx-3678029609" + " " + "forget-pass",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: "#",
                        className: "jsx-3678029609",
                        children: "Forgot Password"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 17
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                      className: "jsx-3678029609"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 17
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                      type: "submit",
                      disabled: isSubmitting,
                      className: "jsx-3678029609" + " " + "test",
                      children: "Login"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 17
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 2
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3678029609",
      children: "#panel1.jsx-3678029609{background-image:'/upm.jpg';background-size:cover;background-color:#800020;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxccGFnZXNcXGxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHYSxBQUdtQyw0QkFDTixzQkFDRyx5QkFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsLVFBXFxwYWdlc1xcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcclxuXHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBsZXQgbG9naW5EZXRhaWxzID0ge1xyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9XHJcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCJcclxuXHJcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSlcclxuICAgIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICA8SGVhZD5cclxuICAgIDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gXCIvc3R5bGUuY3NzXCIgLz5cclxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRVZTVFFOMy9henByRzFBbm0zUURncEpMSW05TmFvMFl6MXp0Y1FUd0ZzcGQzeUQ2NVZvaGhwdXVDT21MQVNqQ1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxyXG4gPC9IZWFkPlxyXG4gXHJcbiA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBpZD1cInBhbmVsMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29waWNcIiBzdHlsZT17e3BhZGRpbmc6IFwiMjUlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91c2VyLnBuZ1wiIGlkPVwidXNlclwiIGFsdD1cInVzZXJcIiBzdHlsZT17e21hcmdpbjogXCJhdXRvXCIsIHdpZHRoOiBcIjE1MHB4XCIsIGhlaWdodDogXCIxNTBweFwifX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxoMj48Yj5RVUFMSVRZIEFTU1VSQU5DRSBQT1JUQUw8L2I+PC9oMj5cclxuICAgICAgICAgICAgPGg0PlVuaXZlcnNpdHkgb2YgdGhlIFBoaWxpcHBpbmVzIE1hbmlsYTwvaDQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9naW5cIj5cclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtsb2dpbkRldGFpbHN9XHJcbiAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW5SZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9sb2dpblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICB1cGVtYWlsOiBgJHt2YWx1ZXMudXNlcm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBgJHt2YWx1ZXMucGFzc3dvcmR9YFxyXG4gICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZih0b2tlblJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgIHNldENvb2tpZShcInVzZXJcIiwgdG9rZW5SZXMuZGF0YS5yZXN1bHQudG9rZW4sIHtcclxuICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIG1heEFnZTogMzYwMCwgLy8gRXhwaXJlcyBhZnRlciAxaHJcclxuICAgICAgICAgICAgICAgICAgICAgc2FtZVNpdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgdG9rZW4gPSBqd3QuZGVjb2RlKHRva2VuUmVzLmRhdGEucmVzdWx0LnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0b2tlbi5yb2xlXHJcbiAgICAgICAgICAgICAgICAgICBpZihyb2xlID09IDEpIHsgLy8gZmFjdWx0eSBcclxuICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5L2Jhc2ljLWluZm8nKVxyXG4gICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb2xlID09IDIgfHwgcm9sZSA9PSAzKSB7IC8vIHVuaXQgaGVhZCBvciBkZXB0LiBjaGFpclxyXG4gICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZhY3VsdHknKVxyXG4gICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHJvbGUgPT0gNSkgeyAvL2FkbWluXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbicpXHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnc29tZXRoaW5nIHdyb25nJylcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICBsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgIHZhbHVlcy51c2VybmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgdmFsdWVzLnBhc3N3b3JkPVwiXCJcclxuICAgICAgICAgICAgICAgICByZXR1cm4gZXJyXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgPnsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlVQIE1haWxcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9yZ2V0LXBhc3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Gb3Jnb3QgUGFzc3dvcmQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXN0XCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuIDxzdHlsZSBqc3g+e2BcclxuICAgICNwYW5lbDF7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICcvdXBtLmpwZyc7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwO1xyXG4gICAgfVxyXG5cdGB9PC9zdHlsZT5cclxuIDwvZGl2PlxyXG4gIFxyXG5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\pages\\\\login.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/login.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvaWdub3JlZHxDOlxcVXNlcnNcXG5pY2hvXFxEb2N1bWVudHNcXEdpdEh1YlxcZHBzbS1xYS1wb3J0YWwtUUFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJMb2dpbiIsImxvZ2luRGV0YWlscyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJjb29raWUiLCJzZXRDb29raWUiLCJ1c2VDb29raWVzIiwicGFkZGluZyIsImhlaWdodCIsIm1hcmdpbiIsIndpZHRoIiwidmFsdWVzIiwidG9rZW4iLCJ0b2tlblJlcyIsImF4aW9zIiwicHJvY2VzcyIsInVwZW1haWwiLCJkYXRhIiwic3VjY2VzcyIsInJlc3VsdCIsInBhdGgiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsImp3dCIsInJvbGUiLCJSb3V0ZXIiLCJ3aW5kb3ciLCJhbGVydCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwiZXJyb3JzIiwibWVzc2FnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZixNQUFJQyxZQUFZLEdBQUc7QUFDakJDLFlBQVEsRUFBRSxFQURPO0FBRWpCQyxZQUFRLEVBQUU7QUFGTyxHQUFuQjtBQUlBLE1BQUlDLFlBQVksR0FBRyxFQUFuQjtBQUVBLFFBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULElBQXNCQyx3REFBVSxDQUFDLENBQUMsTUFBRCxDQUFELENBQXRDO0FBQ0Usc0JBQ0Y7QUFBQTtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUUsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixl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bUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiXHJcblxyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgbGV0IGxvZ2luRGV0YWlscyA9IHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfVxyXG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiXHJcblxyXG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pXHJcbiAgICByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgPEhlYWQ+XHJcbiAgICA8dGl0bGU+RFBTTS1RQS1QT1JUQUw8L3RpdGxlPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9IFwiL3N0eWxlLmNzc1wiIC8+XHJcbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LUVWU1RRTjMvYXpwckcxQW5tM1FEZ3BKTEltOU5hbzBZejF6dGNRVHdGc3BkM3lENjVWb2hocHV1Q09tTEFTakNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cclxuIDwvSGVhZD5cclxuIFxyXG4gPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIgaWQ9XCJwYW5lbDFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJsb2dvcGljXCIgc3R5bGU9e3twYWRkaW5nOiBcIjI1JVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXNlci5wbmdcIiBpZD1cInVzZXJcIiBhbHQ9XCJ1c2VyXCIgc3R5bGU9e3ttYXJnaW46IFwiYXV0b1wiLCB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiMTUwcHhcIn19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8aDI+PGI+UVVBTElUWSBBU1NVUkFOQ0UgUE9SVEFMPC9iPjwvaDI+XHJcbiAgICAgICAgICAgIDxoND5Vbml2ZXJzaXR5IG9mIHRoZSBQaGlsaXBwaW5lcyBNYW5pbGE8L2g0PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17bG9naW5EZXRhaWxzfVxyXG4gICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvbG9naW5cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgdXBlbWFpbDogYCR7dmFsdWVzLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogYCR7dmFsdWVzLnBhc3N3b3JkfWBcclxuICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgaWYodG9rZW5SZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJ1c2VyXCIsIHRva2VuUmVzLmRhdGEucmVzdWx0LnRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICBtYXhBZ2U6IDM2MDAsIC8vIEV4cGlyZXMgYWZ0ZXIgMWhyXHJcbiAgICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgIHRva2VuID0gand0LmRlY29kZSh0b2tlblJlcy5kYXRhLnJlc3VsdC50b2tlbilcclxuICAgICAgICAgICAgICAgICAgIGxldCByb2xlID0gdG9rZW4ucm9sZVxyXG4gICAgICAgICAgICAgICAgICAgaWYocm9sZSA9PSAxKSB7IC8vIGZhY3VsdHkgXHJcbiAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmFjdWx0eS9iYXNpYy1pbmZvJylcclxuICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm9sZSA9PSAyIHx8IHJvbGUgPT0gMykgeyAvLyB1bml0IGhlYWQgb3IgZGVwdC4gY2hhaXJcclxuICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9mYWN1bHR5JylcclxuICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyb2xlID09IDUpIHsgLy9hZG1pblxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4nKVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ3NvbWV0aGluZyB3cm9uZycpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgbGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICB2YWx1ZXMudXNlcm5hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgIHZhbHVlcy5wYXNzd29yZD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGVyclxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgID57KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJVUCBNYWlsXCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcmdldC1wYXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Rm9yZ290IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGVzdFwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gPC9kaXY+XHJcbiA8c3R5bGUganN4PntgXHJcbiAgICAjcGFuZWwxe1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAnL3VwbS5qcGcnO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDAyMDtcclxuICAgIH1cclxuXHRgfTwvc3R5bGU+XHJcbiA8L2Rpdj5cclxuICBcclxuXHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExvZ2luXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==