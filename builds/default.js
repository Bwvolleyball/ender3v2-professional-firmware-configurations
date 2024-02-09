module.exports = {
    board_env: "STM32F103RE_creality",
    only: "stable",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-default-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/bwvolleyball/ender3v2-professional-firmware-configurations/",
        path: "BW_Ender3V2_02062024",
        stable_branch: "main"
    }
};