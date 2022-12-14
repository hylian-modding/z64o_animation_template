import { INetworkPlayer } from 'modloader64_api/NetworkHandler';
import { bus } from 'modloader64_api/EventHandler';
import { ExternalAPIProvider } from 'modloader64_api/ExternalAPIProvider';
import path from 'path';
import { AgeOrForm } from 'Z64Lib/API/Common/Z64API';
import { Z64LibSupportedGames } from 'Z64Lib/API/Utilities/Z64LibSupportedGames';
import { Z64_GAME } from 'Z64Lib/src/Common/types/GameAliases';
import { number_ref } from 'modloader64_api/Sylvain/ImGui';

@ExternalAPIProvider("Z64API", "3.1.0", path.resolve(__dirname))
export class Z64OnlineAPIProvider {
}

export enum Z64OnlineEvents {
    PLAYER_PUPPET_PRESPAWN = 'Z64Online:onPlayerPuppetPreSpawned',
    PLAYER_PUPPET_SPAWNED = 'Z64Online:onPlayerPuppetSpawned',
    PLAYER_PUPPET_DESPAWNED = 'Z64Online:onPlayerPuppetDespawned',
    PLAYER_PUPPET_QUERY = "Z64Online:PlayerPuppetQuery",
    SERVER_PLAYER_CHANGED_SCENES = 'Z64Online:onServerPlayerChangedScenes',
    CLIENT_REMOTE_PLAYER_CHANGED_SCENES = 'Z64Online:onRemotePlayerChangedScenes',
    GHOST_MODE = 'Z64Online:EnableGhostMode',
    GAINED_HEART_CONTAINER = 'Z64Online:GainedHeartContainer',
    GAINED_PIECE_OF_HEART = 'Z64Online:GainedPieceOfHeart',
    MAGIC_METER_INCREASED = 'Z64Online:GainedMagicMeter',
    ON_INVENTORY_UPDATE = 'Z64Online:OnInventoryUpdate',
    ON_EXTERNAL_ACTOR_SYNC_LOAD = 'Z64Online:OnExternalActorSyncLoad',
    ON_REGISTER_EMOTE = 'Z64Online:OnRegisterEmote',
    ON_LOAD_SOUND_PACK = "Z64Online:OnLoadSoundPack",
    POST_LOADED_SOUND_LIST = "Z64Online:PostLoadedSoundList",
    ON_SELECT_SOUND_PACK = "Z64Online:OnSelectSoundPack",
    ON_REMOTE_SOUND_PACK = "Z64Online:OnRemoteSoundPack",
    ON_REMOTE_PLAY_SOUND = "Z64Online:OnRemotePlaySound",
    ALLOCATE_MODEL_BLOCK = "Z64Online:AllocateModelBlock",
    POST_LOADED_MODELS_LIST = "Z64Online:PostLoadedModelsList",
    LOAD_EQUIPMENT_BUFFER = "Z64Online:LoadEquipmentBuffer",
    LOAD_EQUIPMENT_PAK = "Z64Online:LoadEquipmentPak",
    REFRESH_EQUIPMENT = "Z64Online:RefreshEquipment",
    SWORD_NEEDS_UPDATE = "Z64Online:UpdateSwordB",
    CLEAR_EQUIPMENT = "Z64Online:ClearEquipment",
    EQUIPMENT_ZOBJ_LOADED = "Z64Online:EqZobjLoad",
    EQUIPMENT_LOAD_START = "Z64Online:EqZobjLoadStart",
    EQUIPMENT_LOAD_END = "Z64Online:EqZobjLoadEnd",
    DEBUG_DUMP_RAM = "Z64Online:DumpRam",
    PUPPETS_CLEAR = "Z64Online:PuppetsClear",
    ON_MODEL_MANAGER_READY = "Z64Online:ON_MODEL_MANAGER_READY",
    PUPPET_AGE_CHANGED = 'Z64Online:PUPPET_AGE_CHANGED',
    SAVE_DATA_ITEM_SET = 'Z64Online:SAVE_DATA_ITEM_SET',
    LOCAL_MODEL_CHANGE_FINISHED = "Z64Online:LOCAL_MODEL_CHANGE_FINISHED",
    LOCAL_MODEL_REFRESH = "Z64Online:LOCAL_MODEL_REFRESH",
    CONVERT_CUSTOM_ANIMATION = "Z64Online:CONVERT_CUSTOM_ANIMATION",
    CUSTOM_ANIMATION_BANK_REGISTER = "Z64Online:CUSTOM_ANIMATION_BANK_REGISTER",
    FORCE_CUSTOM_ANIMATION_BANK = "Z64Online:FORCE_CUSTOM_ANIMATION_BANK",
    CUSTOM_ANIMATION_BANK_EQUIPPED = "Z64Online:CUSTOM_ANIMATION_BANK_EQUIPPED",
    OBJECT_SPAWN = "Z64Online:ObjectSpawn",
    CHANGE_CUSTOM_MODEL = "Z64Online:CHANGE_CUSTOM_MODEL",
    REGISTER_CUSTOM_MODEL = "Z64Online:REGISTER_CUSTOM_MODEL",
    GET_BANK_MODELS = "Z64Online:GET_BANK_MODELS",
    GET_LINK_OBJECT = "Z64Online:GET_LINK_OBJECT",
    GET_CURRENT_MODEL = "Z64Online:GET_CURRENT_MODEL",
    PREPROCESS_ZOBJ = "Z64Online:PREPROCESS_ZOBJ",
    MMO_TIME_START = "Z64Online:MMO_TIME_START",
    MMO_TIME_STOP = "Z64Online:MMO_TIME_STOP",
    MMO_UPDATE_TIME = "Z64Online:MMO_UPDATE_TIME",
    MMO_SOT_TRIGGER = "Z64Online:MMO_SOT_TRIGGER"
}

export const enum Z64O_CosmeticEvents{
  LOAD_CUSTOM_NAVI = "Z64Online:LOAD_CUSTOM_NAVI"
}

export class Z64_AnimationBank {
  name: string;
  bank: Buffer;

  constructor(name: string, bank: Buffer) {
    this.name = name;
    this.bank = bank;
  }
}

export class Z64_AnimConvert {
  name!: string;
  fileBuf!: Buffer;
  floorPlane!: boolean;
  constructor(name: string, fileBuf: Buffer, floorPlane: boolean) {
    this.name = name;
    this.fileBuf = fileBuf;
    this.floorPlane = floorPlane;
  }

}