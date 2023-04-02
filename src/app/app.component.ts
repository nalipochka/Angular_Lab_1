import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bill Gates';

  quotes: string[] = ['"Витрачати гроші розумно настільки ж складно, як і заробляти їх."',
  '"Я зачісуюся кожного разу перед тим, як надіслати e-mail, оскільки сподіваюся виглядати привабливо."',
  '"Успіх нічому не навчає. Він тільки переконує розумних людей у тому, що вони не можуть програти"'];

  links: [string,string][]=[["https://uk.wikipedia.org/wiki/Білл_Гейтс","wikipedia.org"],
  ["https://www.gatesnotes.com","gatesnotes.com"],
  ["https://www.facebook.com/BillGates/?locale=ru_RU","facebook.com"]];
}
