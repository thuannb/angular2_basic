"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var employee_component_1 = require("./employee.component");
var notfound_component_1 = require("./notfound.component");
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    // { path: '', redirectTo: 'employee', pathMatch: "full" },//vao trang chu tu dong chuyen sang trang con
    { path: 'employee', component: employee_component_1.EmployeeComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map