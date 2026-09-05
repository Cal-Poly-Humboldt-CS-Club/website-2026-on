---
title: 'Crafting a Minecraft Mod with Nate'
id: 'minecraft-mod-2026'
date: '2026-03-25'
time: '5-6:30 pm'
location: 'BSS 166'
description: 'Learn how to create a minecraft mod for Java edition. Explore creative mod creation and programming things which aren’t just for a homework assignment, but that you can play with!'
thumbnail: '/event-files/minecraft-mod/thumbnail.jpg'
tags:
    - 'video games'
    - 'workshop'
    - 'programming'
---

![Person plaing minecraft on laptop with custom item in hand](../event-files/minecraft-mod/mod-1.jpg "Enrique Lopez")

# Getting started

Install VSCode (or IntelliJ IDEA)

Go to the develop template: [https://fabricmc.net/develop/template/](https://fabricmc.net/develop/template/). The version should be 1.21, IN ADVANCED OPTIONS SELECT ONLY DATA GENERATION

Place zip inside dedicated folder and extract zip.

Open VSCode and
- Get the “Extension Pack for Java” plugin
- Install a JDK (Java Development Kit): Java 21

Open folder via settings in the top corner, and wait for Gradle Configuration to finish.


## Starting the mod

Create `Silvermodclient.java`:

```
    package nate.silvermod;
    import net.fabricmc.api.ClientModInitializer;
    public class Silvermodclient implements ClientModInitializer{
        @Override
        public void onInitializeClient() {    

        }
    }
```


Go to `fabric_mod.json` and add:

```
	"entrypoints": {
		"main": [
			"nate.silvermod.Silvermod"
		],
		"fabric-datagen": [
			"nate.silvermod.SilvermodDataGenerator"
		],
		"client": [
			"nate.silvermod.Silvermodclient"
		]
    }
```

Then generate sources: go to Gradle, then Tasks, fabric, then run the genSources option

Then go to ide, then run the vscode option

Then go to run and debug and run minecraft for the first time


## Adding a custom item

Go back to the explorer, right click in the mod folder, and make a new folder called `item`:

Create a file called `ModItems.java`:

```
    package nate.silvermod.item;

    import nate.silvermod.Silvermod;
    import net.minecraft.item.Item;
    import net.minecraft.registry.Registries;
    import net.minecraft.registry.Registry;
    import net.minecraft.util.Identifier;

    public class ModItems {
        
        public static final Item SILVER_INGOT = Registry.register(Registries.ITEM, 
            Identifier.of(Silvermod.MOD_ID, "silver_ingot"), new Item(new Item.Settings()));


        public static void registerModItems(){

        }
    }
```

Add registerModItems to `ModItems.java`:
```
    import net.fabricmc.fabric.api.itemgroup.v1.ItemGroupEvents;


    public static void registerModItems(){
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS).register(entries -> {
            entries.add(SILVER_INGOT);
        });
    }
```

Add registerModItems to run in `Silvermod.java` on initialize:
```
    import nate.silvermod.item.ModItems;


	@Override
	public void onInitialize() {

		LOGGER.info("Hello Fabric world!");
		ModItems.registerModItems();
	}
```

If you run the game, it should show the item as being present in the miscellaneous tab! Yay!

![Person standing infront of two screens with VS code on them](../event-files/minecraft-mod/mod-2.jpg "Enrique Lopez")

## Name and textures

Now to add a name and a texture… go to the assets then the silvermod folder and create a new folder named `lang`.

Inside, make a file named `en_us.json` with the contents:

```
    {
        "item.silvermod.silver_ingot": "Silver Ingot"
    }
```

Then in the `assets/silvermod` folder create a new folder named `models`, and inside of that create a new folder named `item`.

Inside, make a file `silver_ingot.json` with the contents:

```
    {
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": "silvermod:item/silver_ingot"
        }
    }
```

Then in the `assets/silvermod` folder create a new folder named `textures`, and inside of that create a new folder named `item`.

Add the provided asset for the silver ingot into that folder.


Now, if you run the game, you should see that the item is rendering, hopefully correctly!

## Adding a second item: raw silver

Done in person, largely repeating previous process: we changed `ModItems.java`, `lang`, `models\item`, and `textures\item`.

Now you should see a second item inside of minecraft!

## Smelting custom items

We are going to add a custom smelting recipe...

Under resources, make a new directory called `data`, in that folder make a directory called `silvermod`, then make a directory called `recipe`.

make a file called `silver_ingot_from_smelting_raw_silver.json` with the contents:

```
    {
        "type": "minecraft:smelting",
        "category": "misc",
        "cookingtime": 250,
        "experience": 0.2,
        "group": "silver_ingot",
        "ingredient": {
            "item": "silver-mod:raw_silver"
        },
        "result": {
            "id": "silver-mod:silver_ingot"
        }
    }
```

Open game to test if smelting works!

Now, if you duplicate the file, and change smelting to blasting and tweak the numbers, check in minecraft again…
