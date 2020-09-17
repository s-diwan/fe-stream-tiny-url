import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TinyurlService } from '../services/tinyurl.service';
import { TinyUrlPopComponent } from '../tiny-url-pop/tiny-url-pop.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tinyUrlForm: FormGroup;
  shortUrl: any;
  longUrl: any;
  constructor(private snackBar: MatSnackBar, private tinyUrlService: TinyurlService,
              public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tinyUrlForm = this.formBuilder.group({
      longUrl: [''],
      expTime: ['']
    });
  }

  get f(): any { return this.tinyUrlForm.controls; }

  createTinyUrl(): any{
    this.tinyUrlService.createTinyUrl(
      {longUrl: this.f.longUrl.value,
      time: this.f.expTime.value}
      ).toPromise().then( data => {
      this.shortUrl = data;
      })
      .catch((error) => {
        this.shortUrl = error.error.text;
        if (error.status !== 500 ) {
          this.openTinyDialog(this.shortUrl);
          this.openSnackBar('Tiny Url Generated', 'Successfully');
        }
        else {
          this.openSnackBar('Invalid Url', 'Error');
        }
      });
  }

  openTinyDialog(url): void {
    const dialogRef = this.dialog.open(TinyUrlPopComponent, {
      height: '200px',
      width: '300px',
      data: url
    });

    dialogRef.afterClosed().subscribe(result => {
      this.tinyUrlForm.reset();
      console.log(`Dialog result: ${result}`);
    });
  }

  openSnackBar(message, action): any {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
