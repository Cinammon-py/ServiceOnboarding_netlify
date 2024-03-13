function yesnoCheck(that) {
  if (that.value == 'other') {
    document.getElementById('ifYes').style.display = 'block';
  } else {
    document.getElementById('ifYes').style.display = 'none';
    document.getElementById('ifYes').required = false;
  }
}
function RWorFr(che) {
  if (che.value == 'Foreigner') {
    document.getElementById('ifRW').required = false;
    document.getElementById('ifFR').style.display = 'block';
    document.getElementById('ifRW').style.display = 'none';
  } else if (che.value == 'Rwandan') {
    document.getElementById('ifFR').required = false;
    document.getElementById('ifRW').style.display = 'block';
    document.getElementById('ifFR').style.display = 'none';
  }
}
