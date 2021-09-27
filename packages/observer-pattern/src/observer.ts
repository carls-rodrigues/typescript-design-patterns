import chalk from 'chalk';

interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}
interface Observer {
  update(temperature: number): void;
}

class WeatherStation implements Subject {
  private temparature: number;
  private observers: Observer[] = [];

  setTemparature(temp: number) {
    console.log(
      `${chalk.blue(
        'WeatherStation: new temperature measurement:'
      )} ${chalk.green(temp)}`
    );
    this.temparature = temp;
    this.notifyObservers();
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }
  removeObserver(o: Observer): void {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }
  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temparature);
    }
  }
}
class TemperatureDisplay implements Observer {
  private subject: Subject;
  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number): void {
    console.log(chalk.red(`TemperatureDisplay: I need to update my display`));
  }
}

class Fan implements Observer {
  private subject: Subject;
  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number): void {
    if (temperature > 25) {
      console.log(chalk.magenta('Fan: its hot here, turning myself on...'));
    } else {
      console.log(
        chalk.magenta('Fan: its nice and cool, turning myself off...')
      );
    }
  }
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemparature(20);
weatherStation.setTemparature(30);
