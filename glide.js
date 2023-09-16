const module = new Module("Glide 2", true, true, ModuleCategory.MOVEMENT);
const mode = new ModeSetting("Mode", ["Horizontal", "Up", "Down"]);
const velocity = new SliderSetting("Velocity", [0.1, 0, 0.5, 0.01]);

function onScriptEnabled() {
    module.addSettings([mode, velocity]);
    ModuleManager.addModule(module);
}

function onScriptDisabled() {
    ModuleManager.removeModule(module);
}

function onFastTick() {
    if (module != null && mode != null && velocity != null && module.isActive()) { // проверки на null нужны потому что onFastTick начинает работу раньше чем module, mode и velocity инициализируются
        LocalPlayer.setOnGround(true);
        switch (mode.getCurrentMode()) {
            case "Horizontal": LocalPlayer.setVelocityY(0);
                break;
            case "Up": LocalPlayer.setVelocity(velocity.getCurrentValue());
                break;
            case "Down": LocalPlayer.setVelocityY(-velocity.getCurrentValue());
                break;
        }
    }
}