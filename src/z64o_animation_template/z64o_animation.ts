import { IPlugin, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { bus } from 'modloader64_api/EventHandler';
import path from 'path';
import { AgeOrForm } from 'Z64Lib/API/Common/Z64API';
import { InjectCore } from 'modloader64_api/CoreInjection';
import fse from 'fs-extra';
import { Z64OnlineEvents, Z64_AnimationBank, Z64_AnimConvert } from './Z64API/Z64API';
import { z64root } from './z64data';
import { IZ64Main } from 'Z64Lib/API/Common/IZ64Main'
import { Z64_GAME } from 'Z64Lib/src/Common/types/GameAliases';
import { Z64LibSupportedGames } from 'Z64Lib/API/Utilities/Z64LibSupportedGames';


class z64o_animation implements IPlugin {
  ModLoader!: IModLoaderAPI;
  pluginName?: string | undefined;
  @InjectCore()
  core!: IZ64Main;
  game!: number;


  preinit(): void { }
  init(): void {
  }

  postinit(): void {
    this.game = Z64_GAME;
    switch (this.game) {
      case Z64LibSupportedGames.OCARINA_OF_TIME:
        this.OOT();
        break;
      case Z64LibSupportedGames.MAJORAS_MASK:
        this.MM();
        break;
    }
   }
  onTick(): void { }

  private OOT() {
    let z64: z64root = (this as any)['metadata']['z64o_animation'];
    if (z64.OOT.anim_file.file !== '') {
      bus.emit(Z64OnlineEvents.CONVERT_CUSTOM_ANIMATION, new Z64_AnimConvert(z64.OOT.anim_file.name, fse.readFileSync(path.resolve(path.join(__dirname, z64.OOT.anim_file.file))), z64.OOT.options.floorPlaneCompensation));
    }
  }

  private MM() {
    let z64: z64root = (this as any)['metadata']['z64o_animation'];
    if (z64.MM.anim_file.file !== '') {
      bus.emit(Z64OnlineEvents.CONVERT_CUSTOM_ANIMATION, new Z64_AnimConvert(z64.MM.anim_file.name, fse.readFileSync(path.resolve(path.join(__dirname, z64.MM.anim_file.file))), z64.MM.options.floorPlaneCompensation));
    }
  }
}

module.exports = z64o_animation;
