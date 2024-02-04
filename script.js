const fileInput = document.querySelector("#ImageFileInput");
const canvas = document.querySelector("#canvas");
const canvasCtx = canvas.getContext("2d");
const brightnessInput = document.querySelector("#brightness");
const saturationInput = document.querySelector("#saturation");
const blurInput = document.querySelector("#blur");
const inversionInput = document.querySelector("#inversion");

const settings = {};
let image = null;

function resetSettings () {
   settings.brightness = "100";
   settings.saturation =  "100";
   settings.blur = "0";
   settings.inversion = "0";

   brightnessInput = settings.brightness;
   saturationInput = settings.saturation;
   blurInput.value = settings.blur;
   inversionInput.value = settings.inversion;
}

   function updateSetting (key, value) {
    if (image) return;

     settings[key] = value;
   }
 brightnessInput.addEventListener("change", () => updateSetting("brightness", brightnessInput.value));
 saturationInput.addEventListener("change", () => updateSetting("saturation", saturationInput.value));
 blurInput.addEventListener("change", () => updateSetting("blur", blurInput.value));
 inversionInput.addEventListener("change", () => updateSetting("inversion", inversionInput.value));
