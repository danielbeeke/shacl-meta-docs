import KodemoPlayer from '@kodemo/player-standalone'
import data from './shacl-meta-modules.json' assert { type: "json" }

const player = new KodemoPlayer();

player.load(data)