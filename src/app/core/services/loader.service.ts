import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private spinnerTopRef = this.cdkSpinnerCreate();
  private executingCounter = 0;
  private loadingStatus$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  get loading$(): Observable<boolean> {
    return this.loadingStatus$.asObservable();
  }

  constructor(private overlay: Overlay) {}

  private cdkSpinnerCreate(): OverlayRef {
    return this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });
  }

  start(): void {
    this.executingCounter++;
    this.loading$.subscribe((status: boolean) => {
      if (this.executingCounter === 1 && !status) {
        this.spinnerTopRef.attach(new ComponentPortal(MatSpinner));
      }
    });
    this.loadingStatus$.next(true);
  }

  stop(): void {
    if (this.executingCounter > 0) {
      this.executingCounter--;
    }
    this.loading$.subscribe((status: boolean) => {
      if (this.executingCounter === 0 && status) {
        setTimeout(() => {
          this.spinnerTopRef.detach();
        }, 500);
        this.loadingStatus$.next(false);
      }
    });
  }
}
