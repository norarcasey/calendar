import moment from 'moment';

const selectedDate = moment();
const reminders = {
  2018: {
    7: {
      8: [{
        text: 'Something to Remind me about',
        color: '#23343c'
      }]
    }
  }
}

export const PreloadedState = {
  selectedDate: selectedDate,
  reminders: reminders
};