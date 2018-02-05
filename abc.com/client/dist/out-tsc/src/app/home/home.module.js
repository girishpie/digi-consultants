"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_component_1 = require("./home.component");
var header_module_1 = require("./header/header.module");
var user_component_1 = require("../users/user.component");
var new_user_component_1 = require("../users/new/new-user.component");
var new_user_module_1 = require("../users/new/new-user.module");
var angular_1 = require("@uirouter/angular");
var user_module_1 = require("../users/user.module");
var search_module_1 = require("../search/search.module");
var pagination_module_1 = require("../pagination/pagination.module");
var project_component_1 = require("../project/project.component");
var new_project_module_1 = require("../project/new/new-project.module");
var new_project_component_1 = require("../project/new/new-project.component");
var project_module_1 = require("../project/project.module");
var client_component_1 = require("../client/client.component");
var client_module_1 = require("../client/client.module");
var new_client_component_1 = require("../client/new/new-client.component");
var new_client_module_1 = require("../client/new/new-client.module");
var company_component_1 = require("../company/company.component");
var company_module_1 = require("../company/company.module");
var new_company_component_1 = require("../company/new/new-company.component");
var new_company_module_1 = require("../company/new/new-company.module");
var phase_component_1 = require("../phase/phase.component");
var phase_module_1 = require("../phase/phase.module");
var new_phase_component_1 = require("../phase/new/new-phase.component");
var new_phase_module_1 = require("../phase/new/new-phase.module");
var query_params_service_1 = require("./query-obeservables/query-params.service");
var ngx_pagination_1 = require("ngx-pagination");
var role_component_1 = require("../roles/role.component");
var new_role_module_1 = require("../roles/new/new-role.module");
var new_role_component_1 = require("../roles/new/new-role.component");
var role_module_1 = require("../roles/role.module");
var document_component_1 = require("../document/document.component");
var document_module_1 = require("../document/document.module");
var new_file_component_1 = require("../document/new/new-file.component");
var new_file_module_1 = require("../document/new/new-file.module");
var boq_component_1 = require("../boq/boq.component");
var boq_module_1 = require("../boq/boq.module");
var new_boq_component_1 = require("../boq/new/new-boq.component");
var new_boq_module_1 = require("../boq/new/new-boq.module");
var department_component_1 = require("../department/department.component");
var department_module_1 = require("../department/department.module");
var new_department_component_1 = require("../department/new/new-department.component");
var new_department_module_1 = require("../department/new/new-department.module");
var section_component_1 = require("../section/section.component");
var section_module_1 = require("../section/section.module");
var new_section_component_1 = require("../section/new/new-section.component");
var new_section_module_1 = require("../section/new/new-section.module");
var product_component_1 = require("../product/product.component");
var product_module_1 = require("../product/product.module");
var new_product_component_1 = require("../product/new/new-product.component");
var new_product_module_1 = require("../product/new/new-product.module");
var category_component_1 = require("../category/category.component");
var category_module_1 = require("../category/category.module");
var new_category_component_1 = require("../category/new/new-category.component");
var new_category_module_1 = require("../category/new/new-category.module");
var subcategory_component_1 = require("../subcategory/subcategory.component");
var subcategory_module_1 = require("../subcategory/subcategory.module");
var new_subcategory_component_1 = require("../subcategory/new/new-subcategory.component");
var new_subcategory_module_1 = require("../subcategory/new/new-subcategory.module");
var employee_component_1 = require("../employee/employee.component");
var employee_module_1 = require("../employee/employee.module");
var new_employee_component_1 = require("../employee/new/new-employee.component");
var new_employee_module_1 = require("../employee/new/new-employee.module");
var meeting_component_1 = require("../meeting/meeting.component");
var meeting_module_1 = require("../meeting/meeting.module");
var new_meeting_component_1 = require("../meeting/new/new-meeting.component");
var new_meeting_module_1 = require("../meeting/new/new-meeting.module");
var login_component_1 = require("../login/login.component");
var quality_module_1 = require("../quality/quality.module");
var quality_component_1 = require("../quality/quality.component");
var new_quality_module_1 = require("../quality/new/new-quality.module");
var new_quality_component_1 = require("../quality/new/new-quality.component");
var request_module_1 = require("../request/request.module");
var request_component_1 = require("../request/request.component");
var new_request_module_1 = require("../request/new/new-request.module");
var new_request_component_1 = require("../request/new/new-request.component");
var projectlist_module_1 = require("../Projectlist/projectlist.module");
var projectlist_component_1 = require("../Projectlist/projectlist.component");
var specification_module_1 = require("../specification/specification.module");
var specification_component_1 = require("../specification/specification.component");
var new_specification_module_1 = require("../specification/new/new-specification.module");
var new_specification_component_1 = require("../specification/new/new-specification.component");
var userState = { name: 'user', url: '/user', component: user_component_1.UserComponent };
var newUserState = { name: 'new-user', url: '/new-user', component: new_user_component_1.NewUserComponent };
var roleState = { name: 'role', url: '/role', component: role_component_1.RoleComponent };
var newRoleState = { name: 'new-role', url: '/new-role', component: new_role_component_1.NewRoleComponent };
var projectState = { name: 'project', url: '/project', component: project_component_1.ProjectComponent };
var newProjectState = { name: 'new-project', url: '/new-project', component: new_project_component_1.NewProjectComponent };
var clientState = { name: 'client', url: '/client', component: client_component_1.ClientComponent };
var newClientState = { name: 'new-client', url: '/new-client', component: new_client_component_1.NewClientComponent };
var companyState = { name: 'company', url: '/company', component: company_component_1.CompanyComponent };
var newCompanyState = { name: 'new-company', url: '/new-company', component: new_company_component_1.NewCompanyComponent };
var phaseState = { name: 'phase', url: '/phase', component: phase_component_1.PhaseComponent };
var newPhaseState = { name: 'new-phase', url: '/new-phase', component: new_phase_component_1.NewPhaseComponent };
var documentState = { name: 'document', url: '/document', component: document_component_1.DocumentComponent };
var newDocumentState = { name: 'new-file', url: '/new-document', component: new_file_component_1.NewDocumentComponent };
var boqState = { name: 'boq', url: '/boq', component: boq_component_1.BoQComponent };
var newBoQState = { name: 'new-boq', url: '/new-boq', component: new_boq_component_1.NewBoQComponent };
var departmentState = { name: 'department', url: '/department', component: department_component_1.DepartmentComponent };
var newDepartmentState = { name: 'new-department', url: '/new-department', component: new_department_component_1.NewDepartmentComponent };
var sectionState = { name: 'section', url: '/section', component: section_component_1.SectionComponent };
var newSectionState = { name: 'new-section', url: '/new-section', component: new_section_component_1.NewSectionComponent };
var productState = { name: 'product', url: '/product', component: product_component_1.ProductComponent };
var newProductState = { name: 'new-product', url: '/new-product', component: new_product_component_1.NewProductComponent };
var categoryState = { name: 'category', url: '/category', component: category_component_1.CategoryComponent };
var newCategoryState = { name: 'new-category', url: '/new-category', component: new_category_component_1.NewCategoryComponent };
var subcategoryState = { name: 'subcategory', url: '/subcategory', component: subcategory_component_1.SubcategoryComponent };
var newSubcategoryState = { name: 'new-subcategory', url: '/new-subcategory', component: new_subcategory_component_1.NewSubcategoryComponent };
var employeeState = { name: 'employee', url: '/employee', component: employee_component_1.EmployeeComponent };
var newEmployeeState = { name: 'new-employee', url: '/new-employee', component: new_employee_component_1.NewEmployeeComponent };
var meetingState = { name: 'meeting', url: '/meeting', component: meeting_component_1.MeetingComponent };
var newMeetingState = { name: 'new-meeting', url: '/new-meeting', component: new_meeting_component_1.NewMeetingComponent };
var loginState = { name: 'login', url: '/user-login', component: login_component_1.LoginComponent };
var qualityState = { name: 'quality', url: '/quality', component: quality_component_1.QualityComponent };
var newQualityState = { name: 'new-quality', url: '/new-quality', component: new_quality_component_1.NewQualityComponent };
var requestState = { name: 'request', url: '/request', component: request_component_1.RequestComponent };
var newRequestState = { name: 'new-request', url: '/new-request', component: new_request_component_1.NewRequestComponent };
var projectlistState = { name: 'projectlist', url: '/projectlist', component: projectlist_component_1.ProjectListComponent };
var specificationState = { name: 'specification', url: '/specification', component: specification_component_1.SpecificationComponent };
var NewSpecificationState = { name: 'new-specification', url: '/new-specification', component: new_specification_component_1.NewSpecificationComponent };
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        declarations: [
            home_component_1.HomeComponent
        ],
        imports: [
            ngx_pagination_1.NgxPaginationModule,
            header_module_1.HeaderModule,
            user_module_1.UserModule,
            new_user_module_1.NewUserModule,
            // LoginModule,
            role_module_1.RoleModule,
            new_role_module_1.NewRoleModule,
            project_module_1.ProjectModule,
            new_project_module_1.NewProjectModule,
            client_module_1.ClientModule,
            new_client_module_1.NewClientModule,
            company_module_1.CompanyModule,
            new_company_module_1.NewCompanyModule,
            phase_module_1.PhaseModule,
            new_phase_module_1.NewPhaseModule,
            document_module_1.DocumentModule,
            new_file_module_1.NewDocumentModule,
            department_module_1.DepartmentModule,
            new_department_module_1.NewDepartmentModule,
            search_module_1.SearchModule,
            pagination_module_1.PaginationModule,
            boq_module_1.BoQModule,
            new_boq_module_1.NewBoQModule,
            section_module_1.SectionModule,
            new_section_module_1.NewSectionModule,
            product_module_1.ProductModule,
            new_product_module_1.NewProductModule,
            category_module_1.CategoryModule,
            new_category_module_1.NewCategoryModule,
            subcategory_module_1.SubcategoryModule,
            new_subcategory_module_1.NewSubcategoryModule,
            employee_module_1.EmployeeModule,
            new_employee_module_1.NewEmployeeModule,
            meeting_module_1.MeetingModule,
            new_meeting_module_1.NewMeetingModule,
            quality_module_1.QualityModule,
            new_quality_module_1.NewQualityModule,
            request_module_1.RequestModule,
            new_request_module_1.NewRequestModule,
            projectlist_module_1.ProjectListModule,
            specification_module_1.SpecificationModule,
            new_specification_module_1.NewSpecificationModule,
            angular_1.UIRouterModule.forRoot({ states: [userState, newUserState, roleState, newRoleState, projectState,
                    newProjectState, clientState, newClientState, companyState, newCompanyState, phaseState,
                    newPhaseState, documentState, newDocumentState, boqState, newBoQState, departmentState, newDepartmentState,
                    sectionState, newSectionState, productState, newProductState, categoryState, newCategoryState,
                    subcategoryState, newSubcategoryState, employeeState, newEmployeeState, meetingState, newMeetingState,
                    qualityState, newQualityState, requestState, newRequestState, projectlistState, specificationState, NewSpecificationState], useHash: true })
        ],
        exports: [home_component_1.HomeComponent],
        providers: [query_params_service_1.QueryParamsService],
        bootstrap: []
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map