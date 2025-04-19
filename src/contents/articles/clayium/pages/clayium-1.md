---
slug: "clayium/1"

title: "Balanced Clay | Clayium #1"
desc: "11年前のMC1.7.10で遊びます。"
imgSrc: "/src/contents/articles/clayium/assets/1/clay-machines.png"
imgAlt: "Clay Machines"

article:
  author: ["みゅーおん //Mu-on"]
  published_time: 2025-04-19
  ogp_section: "Gaming"
  tag: ["1.7.10","Clayium"]
---

---

## \#\# MOD構成

- Ars Magica 2
- Blood Magic
- Botania (+ Alfheim)
- BuildCraft (+ Logistics Pipes + QuarryPlus)
- ChromatiCraft
- Clayium
- Electrical Age
- Ender IO
- Forestry (+ Magic Bees + Gendustry)
- IndustrialCraft 2 (+ 永久光 + GT5u)
- NTM: Space
- OpenComputers
- RFTools
- RotaryCraft (+ ElectriCraft + ReactorCraft)
- ThaumCraft 4 (+ ADDONS)
- Thermal Expansion
- Tinker's Construct (+ Extra TiC v1.4.5)

<details>
<summary>全MOD一覧</summary>

- AE2 Fluid Crafting
- AE2 Stuff
- AE2 Wireless Crafting Terminal
- AI\-Improvements
- ASJCore
- Additional Pipes
- Advanced Botany
- Adventure Backpack
- Alchemy Grate
- Alfheim
- Angelica
- AnimationAPI
- Anti Id Conflict
- AppleCore
- Applied Energistics 2
- ArchitectureCraft
- Ars Magica 2
- Automagy
- BD Lib
- BambooMod
- BartWorks
- BeeBetterAtBees
- Better Achievements
- Better Builder's Wands
- Better Placement
- BetterP2P
- BiblioCraft
- Binnie Core
- Blood Arsenal
- Blood Magic: Alchemical Wizardry
- Blur
- Botania
- BuildCraft
- BuildCraft Compat
- Buildcraft Extention
- Carpenter's Blocks
- Catwalks Mod
- ChatFlow
- Chisel
- Chisel Tones
- ChromatiCraft
- Clayium
- CoFH Core
- CoFH Lib
- CodeChicken Core
- Computronics
- Console Filter
- Controlling
- CosmeticArmorReworked
- Crafting Tweaks
- CreativeCore
- Curvy Pipes
- Decocraft
- DragonAPI
- Dynamic Dynamos
- ElectriCraft
- Electrical Age \- jrddunbr's build
- Ender IO
- Ender IO Addons
- EnderCore
- EnderStorage
- Extra Fixes
- Extra Utilities
- ExtraTiC
- FPS Reducer
- Fast Leaf Decay
- FoamFix
- Forbidden Magic
- Forestry for Minecraft
- Forgotten Relics
- FullscreenWhileInactive
- GT NEI Ore Plugin GT:NH Mod
- GT\+\+
- GTNH Lib
- Gadomancy
- GenDustry
- Graviation Suite
- GregTech\-Addon
- Guide\-API
- HoloInventory
- InGame Info XML
- IndustrialCraft 2
- Inventory Tweaks
- Iron Chest
- ItemPhysic
- JourneyMap
- Laser Tech
- LegibleNei
- LittleTiles
- Logistics Pipes
- LunatriusCore
- MachineMuse's Modular Powersuits
- Magic Bees
- Mantle
- McJtyLib
- MineFactory Reloaded
- MineMenu
- MineTweaker 3
- MmmMmmMmmMmm
- Mod Tweaker 2
- MoreInventoryMod
- Mouse Tweaks
- NEI Addons
- NOVA
- NTM: Space
- NameWakander
- Nature's Compass
- Neat
- NetherPortalFix
- NotEnoughIDs
- NotEnoughItems
- Numina
- OAuth
- OC Glasses
- OpenComputers
- OpenSecurity
- Player API
- Project Blue
- ProjectRed Core
- ProjectRed Expansion
- ProjectRed Fabrication
- ProjectRed Illumination
- ProjectRed Transmission
- QuarryPlus
- RFTools
- ReactorCraft
- Refined Relocation
- Resource Loader
- RotaryCraft
- Sanguine Utilities
- Schematica
- SerializationIsBad
- ServerUtilities
- Sound Filters
- Squake
- Steve's Addons
- Steve's Factory Manager
- Storage Drawers
- Storage Drawers NEI Fix
- StorageBox\_Fixed\-3\.0\.5\-5
- TC Inventory Scanning
- TC Node Tracker
- TC4 Tweak
- TCBotaniaExoflame
- Tainted Magic
- Technomancy
- Thaumcraft
- Thaumcraft Gates
- Thaumcraft Mob Aspects
- Thaumcraft NEI Additions
- Thaumcraft NEI Plugin
- Thaumcraft Research Tweaks
- ThaumcraftAltarCull
- Thaumic Boots
- Thaumic Energistics
- Thaumic Exploration
- Thaumic Insurgence
- Thaumic Machina
- Thaumic Tinkerer
- ThaumicHorizons
- Thermal Dynamics
- Thermal Expansion
- Thermal Foundation
- Thermal Tinkering
- Tinker I/O
- Tinkers' Construct
- Tinkers' Mechworks
- TofuCraft\-2\.1\.8\-mc1\.7\.10
- TofuFactoryR\-1\.3\.0\-MC1\.7\.10
- Traveller's Gear
- UniDict
- UniMixins
- VisibleRayGenerator
- WAILA Plugins
- Waila
- Waila Harvestability
- WanionLib
- WarpTheory
- What Are We Looking At
- Witching Gadgets
- WorldEdit
- Ztones
- asielib
- bugtorch\-1\.7\.10\-1\.1\.6
- p455w0rd's Library
- spark
</details>

---

## \#\# 始める前に

古の環境は構築から難しいので、構成を真似するのはあまりおすすめしません。  

1.7.10の環境構築あるある:
- 旧Minecraft Japan Forumが閉鎖している (Internet Archiveだけが頼り)
- Mixin関係はとりあえずUniMixinsを入れとけ
- Dragon APIを導入すると何故かクラッシュする (skill issue)
- スタックトレースが読めないとお話にならない (前提Mod不足はNoClassDefで察しろ)
- クラッシュレポートがバイトコード (ASMのせい、Mixin化は1.7.10時代より後なのだ)
- ポーションIDやバイオームIDは手動で割り当てるもの (これでも1.6.4以前よりはマシ)
- ワールド生成するとタイトル画面に突き返される (多分ID被り、AntiIDConflictを導入しよう)

ついでに1.7.10環境のマルチプレイは絶対におすすめしません。[やばめのRCE地雷が埋まっています](https://blog.mmpa.info/posts/bleeding-pipe/)。  
NewHorizons環境は現在も更新中・脆弱性も対応済なため、マルチプレイでも問題ありません。  


## \#\# 始まり

ワールド生成は無事終了。Chromati・NTM・GT5uを同時採用した超絶重い環境ですが、Angelicaのおかげで普通に動きます。ありがとうGTNH開発班。  
![ChromatiCraft's Pylons](../assets/1/pylon.png)
ChromatiCraftのPylon。いつか触る。  

最初に攻略するMODは悩みますが、**Clayium**を進めることにします。  
工魔何を触るにも鉄が必要->**GT5uの鉱脈探しが面倒**なので、PANで粘土から無限生産したいです。  
GT鉱脈をJourneyMapに記録するVisual Prospecting Modも存在はしますが、NH製なので導入できませんでした。GTNHやりたい。  

ねんどぉ  
![Mining Clay Ore](../assets/1/nendo.png)

を圧縮して  
![Compressed Clay](../assets/1/compressed-clay.png)

粘土作業台。Clayium序盤は手動で機械工作を頑張ります。  
![Clay Work Table](../assets/1/clayworktable.png)
![Working on clay](../assets/1/clayworking.png)
![Clay Spindle](../assets/1/clayspindle.png)
中々に愉快なレシピ達。けどCleanroomでIVのMainframeを作るよりマシ。  

機械を揃えて  
![Primitive Machines](../assets/1/primitive-machines.png)

Tier 3、水力稼働の機械を作成。まだまだ手動クラフトは続きます。  
![Simple Inscriber](../assets/1/simple-inscriber.png)

Tier 4、粘土を圧縮してエネルギー粘土になりました。  
このあたりから非粘土資源も登場。Salt Extractor、GT5u視点だと粘土から塩素が作れる神機械である。  
![Salt Extractor](../assets/1/salt-extractor.png)

ネザーゲート開通の儀。  
火打石(Flint and 'Steel')はGregifiedされているため、溶岩から木材に引火させます。Infinity Evolvedの頃と全く同じことしてる。  
![Nether Gate](../assets/1/nethergate.png)

いざネザーへ  
![ネザー炎上入国拒否](../assets/1/enjo.png)
...NTMのハードモード(528)を有効にしていると、ネザーでは耐火服が必須になるようです。  
流石に面倒すぎるので、設定から無かったことにします。初見殺しにはお気をつけて。  
![528 Config](../assets/1/528.png)

netherquartzvein.png  
![Nether Quartz Vein](../assets/1/netherquartzvein.png)

Tier 5 筐体？  
Gregの鉱石辞書変換に中央の粘土回路が食われました。要修正。  
あと白色のClayium製シリコーンはGregのSiliconeと互換性があります。ケーブルの被覆には困らなさそう。  
![Circuit Converted](../assets/1/gtoredicted.png)


## \#\# 工業化

粘土ソーラー稼働開始。ソーラーは粘土のグレードを処理毎に1段階引き上げます。  
発展工業用粘土へアップグレード&lt;-&gt;工業用粘土へ分解、のループで粘土数を増やし、純増分は別のソーラーでエネルギー粘土へと圧縮します。  
Clayiumの配管、性能的に弱くはないもののー、癖が強すぎて扱いにくい。  
![Clay Farm](../assets/1/claysolar.png)

アルミを焼いて  
![Aluminium Ingot](../assets/1/aluminium.png)

Tier 6、Solar Clay Fabricator Mk II。  
![Solar Clay Fabricator Mk II](../assets/1/claysolar2.png)

T6では粘土からの金属単離が解禁。  
エネルギー量は非常に重いですが、汎用金属資源の無限化が達成できます。  
エネルギー消費が重い上加工速度も遅いので、Greg/Rotaryと戦える数量の金属を吐き出すのはかなり後のお話。  
![Metal Separation](../assets/1/clayminerals.png)

粘土高炉を建てて  
![Clay Blast Furnace](../assets/1/blastfurnace.png)

マンガン+粘土粉からT7金属、Clay Steelを精錬。  
![Clay Steel Ingot](../assets/1/claysteel.png)

ソーラー最終段階、Lithium-Solar Fabricatorでは五重エネルギー粘土まで生産できます...1個の加工に1600秒掛かりますが。  
各圧縮段階毎に加工時間は2倍、必要なソーラーの設置比も2倍になります。適当に配管しときましょ。  
![Quintuple Compressed Energy Clay](../assets/1/claysolar3.png)

下位の粘土ソーラーも繋げて、最終的なソーラー粘土生産はこう。  
粘土はいくら作っても足りないのだ。  
![Solar Clay Farm](../assets/1/solarclayfarm.png)

次のマルチブロックは粘土反応炉。  
レーザーの入力量に応じて加工速度が変化します。まずは青レーザー10基体制で稼働開始。  
![Clay Reactor](../assets/1/clayreactor.png)

リチウム+粘土粉を反応炉に投入して、Clayium Dustが完成。  
Blast Furnaceでインゴットに焼きあげる工程の方が時間が掛かります。  
![Clayium Dust](../assets/1/clayiumdust.png)

時間が掛かるなら 並列すればいいじゃない  
![Parallel Blast Furnace](../assets/1/volcanus.png)

Tier 8では新たな粘土生産、**Clay Fabricator**が解放されます。  
下位粘土の搬入も設置位置の制約も無しに、無から粘土を生産できる便利なやつ。  
**各加工ラインでエネルギー粘土を自給自足できるようになる**ので、自動化ラインの構築が捗ります。  
![Clay Fabricator](../assets/1/clayfabricator.png)

で、パッシブ生産ライン・素材加工設備を強化したのがこちら。  
Clayiumの機械はTierをあげても基本オーバークロックしないので、速度が欲しいなら気合で並列化する必要があります。  
プレート作成機と回路関係は遅すぎる割に要求量も多いのでめんどい。  
![Clay Machines](../assets/1/clay-machines.png)




## \#\# 後書き

動画でよかった希ガス  
この内容なら動画時間5分もかからないのに...静画だと内容が重い...  

次回はClayiumのエンドゲームとAE2を予定しております。  
