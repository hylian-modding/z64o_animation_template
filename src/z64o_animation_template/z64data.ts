export class z64root{
  OOT!: z64data_oot;
  MM!: z64data_mm;
}

export class z64data_oot {
  anim_file!: z64entry;
  options!: z64options;
}

export class z64data_mm{
  anim_file!: z64entry;
  options!: z64options;
}

export class z64entry {
  file!: string;
  name!: string;
}

export class z64options{
  floorPlaneCompensation!: boolean;
}