import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {

  @Input('appPermission')
  roleToCheck: string;

  constructor(
    private el: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private keycloakService: KeycloakService
  ) { }

  ngOnInit(): void {
    const isRoleValid = this.keycloakService.isUserInRole(this.roleToCheck);
    if (isRoleValid) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
