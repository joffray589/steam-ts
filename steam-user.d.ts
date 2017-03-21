/**
 *  node-steam-user typings : https://github.com/DoctorMcKay/node-steam-user
 *
 *  // IN PROGRESS
 */

declare namespace SteamUser {

    namespace Steam {
        /**
         * https://github.com/SteamRE/SteamKit/blob/master/Resources/SteamLanguage/enums.steamd
         */
        enum EUniverse {
            Invalid      = 0,
            Public      = 1,
            Beta        = 2,
            Internal    = 3,
            Dev         = 4,
            Max         = 5
        }

        enum EChatEntryType {
            Invalid             = 0,
            ChatMsg             = 1,
            Typing              = 2,
            InviteGame          = 3,
            Emote               = 4, //obsolete "No longer supported by clients"
            LobbyGameStart      = 5, //obsolete "Listen for LobbyGameCreated_t callback instead"
            LeftConversation    = 6,
            Entered             = 7,
            WasKicked           = 8,
            WasBanned           = 9,
            Disconnected        = 10,
            HistoricalChat      = 11,
            Reserved1           = 12,
            Reserved2           = 13,
            LinkBlocked         = 14
        }

        enum EPersonaState{
            Offline         = 0,
            Online          = 1,
            Busy            = 2,
            Away            = 3,
            Snooze          = 4,
            LookingToTrade  = 5,
            LookingToPlay   = 6,
            Max             = 7
        }

        enum EAccountType {
            Invalid         = 0,
            Individual      = 1,
            Multiseat       = 2,
            GameServer      = 3,
            AnonGameServer  = 4,
            Pending         = 5,
            ContentServer   = 6,
            Clan            = 7,
            Chat            = 8,
            ConsoleUser     = 9,
            AnonUser        = 10,
            Max             = 11
        }

        enum EFriendRelationship {
            None                = 0,
            Blocked             = 1,
            RequestRecipient    = 2,
            Friend              = 3,
            RequestInitiator    = 4,
            Ignored             = 5,
            IgnoredFriend       = 6,
            SuggestedFriend     = 7,
            Max                 = 8
        }

        enum EAccountFlags{
            NormalUser                  = 0,
            PersonaNameSet              = 1,
            Unbannable                  = 2,
            PasswordSet                 = 4,
            Support                     = 8,
            Admin                       = 16,
            Supervisor                  = 32,
            AppEditor                   = 64,
            HWIDSet                     = 128,
            PersonalQASet               = 256,
            VacBeta                     = 512,
            Debug                       = 1024,
            Disabled                    = 2048,
            LimitedUser                 = 4096,
            LimitedUserForce            = 8192,
            EmailValidated              = 16384,
            MarketingTreatment          = 32768,
            OGGInviteOptOut             = 65536,
            ForcePasswordChange         = 131072,
            ForceEmailVerification      = 262144,
            LogonExtraSecurity          = 524288,
            LogonExtraSecurityDisabled  = 1048576,
            Steam2MigrationComplete     = 2097152,
            NeedLogs                    = 4194304,
            Lockdown                    = 8388608,
            MasterAppEditor             = 16777216,
            BannedFromWebAPI            = 33554432,
            ClansOnlyFromFriends        = 67108864,
            GlobalModerator             = 134217728
        }

        enum EClanPermission {
            Nobody                  = 0,
            Owner                   = 1,
            Officer                 = 2,
            OwnerAndOfficer         = 3,
            Member                  = 4,
            Moderator               = 8,
            OwnerOfficerModerator   = Owner | Officer | Moderator, // 11
            AllMembers              = Owner | Officer | Moderator | Member, // 15
            OGGGameOwner            = 16,
            NonMember               = 128,
            MemberAllowed           = NonMember | Member, // 132
            ModeratorAllowed        = NonMember | Member | Moderator, // 140
            OfficerAllowed          = NonMember | Member | Moderator | Officer, // 142
            OwnerAllowed            = NonMember | Member | Moderator | Officer | Owner, // 143
            Anybody                 = NonMember | Member | Moderator | Officer | Owner // 143
        }

        enum EChatPermission {
            Close                       = 1,
            Invite                      = 2,
            Talk                        = 8,
            Kick                        = 16,
            Mute                        = 32,
            SetMetadata                 = 64,
            ChangePermissions           = 128,
            Ban                         = 256,
            ChangeAccess                = 512,
            EveryoneNotInClanDefault    = Talk, // 8
            EveryoneDefault             = Talk | Invite, // 10
                // todo: this doesn't seem correct...
            MemberDefault               = Ban | Kick | Talk | Invite, // 282
            OfficerDefault              = Ban | Kick | Talk | Invite, // 282
            OwnerDefault                = ChangeAccess | Ban | SetMetadata | Mute | Kick | Talk | Invite | Close, // 891
            Mask                        = 1019
        }

        enum EFriendFlags{
            None                    = 0,
            Blocked                 = 1,
            FriendshipRequested     = 2,
            Immediate               = 4,
            ClanMember              = 8,
            OnGameServer            = 16,
            RequestingFriendship    = 128,
            RequestingInfo          = 256,
            Ignored                 = 512,
            IgnoredFriend           = 1024,
            Suggested               = 2048,
            FlagAll                 = 65535
        }

        enum EPersonaStateFlag{
            HasRichPresence         = 1,
            InJoinableGame          = 2,
            OnlineUsingWeb          = 256,
            OnlineUsingMobile       = 512,
            OnlineUsingBigPicture   = 1024
        }

        enum EClientPersonaStateFlag{
            Status          = 1,
            PlayerName      = 2,
            QueryPort       = 4,
            SourceID        = 8,
            Presence        = 16,
            Metadata        = 32,
            LastSeen        = 64,
            ClanInfo        = 128,
            GameExtraInfo   = 256,
            GameDataBlob    = 512,
            ClanTag         = 1024,
            Facebook        = 2048
        }

        enum EAppUsageEvent{
            GameLaunch              = 1,
            GameLaunchTrial         = 2,
            Media                   = 3,
            PreloadStart            = 4,
            PreloadFinish           = 5,
            MarketingMessageView    = 6,
            InGameAdViewed          = 7,
            GameLaunchFreeWeekend   = 8
        }

        enum ELicenseFlags{
            None                = 0,
            Renew               = 0x01,
            RenewalFailed       = 0x02,
            Pending             = 0x04,
            Expired             = 0x08,
            CancelledByUser     = 0x10,
            CancelledByAdmin    = 0x20,
            LowViolenceContent  = 0x40,
            ImportedFromSteam2  = 0x80
        }

        enum ELicenseType{
            NoLicense                               = 0,
            SinglePurchase                          = 1,
            SinglePurchaseLimitedUse                = 2,
            RecurringCharge                         = 3,
            RecurringChargeLimitedUse               = 4,
            RecurringChargeLimitedUseWithOverages   = 5,
            RecurringOption                         = 6
        }

        enum EPaymentMethod{
            None = 0,
            ActivationCode = 1,
            CreditCard = 2,
            Giropay = 3,
            PayPal = 4,
            Ideal = 5,
            PaySafeCard = 6,
            Sofort = 7,
            GuestPass = 8,
            WebMoney = 9,
            MoneyBookers = 10,
            AliPay = 11,
            Yandex = 12,
            Kiosk = 13,
            Qiwi = 14,
            GameStop = 15,
            HardwarePromo = 16,
            MoPay = 17,
            BoletoBancario = 18,
            BoaCompraGold = 19,
            BancoDoBrasilOnline = 20,
            ItauOnline = 21,
            BradescoOnline = 22,
            Pagseguro = 23,
            VisaBrazil = 24,
            AmexBrazil = 25,
            Aura = 26,
            Hipercard = 27,
            MastercardBrazil = 28,
            DinersCardBrazil = 29,
            AuthorizedDevice = 30,
            MOLPoints = 31,
            ClickAndBuy = 32,
            Beeline = 33,
            Konbini = 34,
            EClubPoints = 35,
            CreditCardJapan = 36,
            BankTransferJapan = 37,
            PayEasyJapan = 38,
            Zong = 39,
            CultureVoucher = 40,
            BookVoucher = 41,
            HappymoneyVoucher = 42,
            ConvenientStoreVoucher = 43,
            GameVoucher = 44,
            Multibanco = 45,
            Payshop = 46,
            Maestro = 47,
            OXXO = 48,
            ToditoCash = 49,
            Carnet = 50,
            SPEI = 51,
            ThreePay = 52,
            IsBank = 53,
            Garanti = 54,
            Akbank = 55,
            YapiKredi = 56,
            Halkbank = 57,
            BankAsya = 58,
            Finansbank = 59,
            DenizBank = 60,
            PTT = 61,
            CashU = 62,
            OneCard = 63,
            AutoGrant = 64,
            WebMoneyJapan = 65,
            Smart2PayTest = 66,
            Wallet = 128,
            Valve = 129,
            SteamPressMaster = 130,
            StorePromotion = 131,
            OEMTicket = 256,
            Split = 512,
            Complimentary = 1024
        }

        enum EIntroducerRouting{
            FileShare       = 0,//obsolete
            P2PVoiceChat    = 1,
            P2PNetworking   = 2
        }

        enum EServerFlags{
            None        = 0,
            Active      = 1,
            Secure      = 2,
            Dedicated   = 4,
            Linux       = 8,
            Passworded  = 16,
            Private     = 32,
        }

        enum EDenyReason {
            InvalidVersion              = 1,
            Generic                     = 2,
            NotLoggedOn                 = 3,
            NoLicense                   = 4,
            Cheater                     = 5,
            LoggedInElseWhere           = 6,
            UnknownText                 = 7,
            IncompatibleAnticheat       = 8,
            MemoryCorruption            = 9,
            IncompatibleSoftware        = 10,
            SteamConnectionLost         = 11,
            SteamConnectionError        = 12,
            SteamResponseTimedOut       = 13,
            SteamValidationStalled      = 14,
            SteamOwnerLeftGuestUser     = 15
        }

        enum EClanRank{
            None        = 0,
            Owner       = 1,
            Officer     = 2,
            Member      = 3,
            Moderator   = 4
        }

        enum EClanRelationship{
            None                = 0,
            Blocked             = 1,
            Invited             = 2,
            Member              = 3,
            Kicked              = 4,
            KickAcknowledged    = 5
        }

        enum EAuthSessionResponse{
            OK                              = 0,
            UserNotConnectedToSteam         = 1,
            NoLicenseOrExpired              = 2,
            VACBanned                       = 3,
            LoggedInElseWhere               = 4,
            VACCheckTimedOut                = 5,
            AuthTicketCanceled              = 6,
            AuthTicketInvalidAlreadyUsed    = 7,
            AuthTicketInvalid               = 8,
            PublisherIssuedBan              = 9
        }

        enum EChatRoomEnterResponse{
            Success             = 1,
            DoesntExist         = 2,
            NotAllowed          = 3,
            Full                = 4,
            Error               = 5,
            Banned              = 6,
            Limited             = 7,
            ClanDisabled        = 8,
            CommunityBan        = 9,
            MemberBlockedYou    = 10,
            YouBlockedMember    = 11,
                // these appear to have been removed
            NoRankingDataLobby  = 12, // obsolete
            NoRankingDataUser   = 13, //obsolete
            RankOutOfRange      = 14 //obsolete
        }

        enum EChatRoomType{
            Friend  = 1,
            MUC     = 2,
            Lobby   = 3
        }

        enum EChatInfoType{
            StateChange         = 1,
            InfoUpdate          = 2,
            MemberLimitChange   = 3
        }

        enum EChatAction{
            InviteChat              = 1,
            Kick                    = 2,
            Ban                     = 3,
            UnBan                   = 4,
            StartVoiceSpeak         = 5,
            EndVoiceSpeak           = 6,
            LockChat                = 7,
            UnlockChat              = 8,
            CloseChat               = 9,
            SetJoinable             = 10,
            SetUnjoinable           = 11,
            SetOwner                = 12,
            SetInvisibleToFriends   = 13,
            SetVisibleToFriends     = 14,
            SetModerated            = 15,
            SetUnmoderated          = 16
        }

        enum EChatActionResult{
            Success                 = 1,
            Error                   = 2,
            NotPermitted            = 3,
            NotAllowedOnClanMember  = 4,
            NotAllowedOnBannedUser  = 5,
            NotAllowedOnChatOwner   = 6,
            NotAllowedOnSelf        = 7,
            ChatDoesntExist         = 8,
            ChatFull                = 9,
            VoiceSlotsFull          = 10
        }

        enum EAppInfoSection{
            Unknown         = 0,
            All             = 1,
            First           = 2,
            Common          = 2,
            Extended        = 3,
            Config          = 4,
            Stats           = 5,
            Install         = 6,
            Depots          = 7,
            VAC             = 8,
            DRM             = 9,
            UFS             = 10,
            OGG             = 11,
            Items           = 12, // obsolete
            ItemsUNUSED     = 12,// obsolete
            Policies        = 13,
            SysReqs         = 14,
            Community       = 15,
            Store           = 16,
            Max             = 17
        }

        enum EContentDownloadSourceType {
            Invalid     = 0,
            CS          = 1,
            CDN         = 2,
            LCS         = 3,
            ProxyCache  = 4,
            Max         = 5,
        }

        enum EPlatformType {
            Unknown     = 0,
            Win32       = 1,
            Win64       = 2,
            Linux       = 3,
            OSX         = 4,
            PS3         = 5,
            Max         = 6
        }

        enum EOSType {
            Unknown = -1,

            UMQ = -400,

            PS3 = -300,

            MacOSUnknown = -102,
            MacOS104 = -101,
            MacOS105 = -100,
            MacOS1058 = -99,
            MacOS106 = -95,
            MacOS1063 = -94,
            MacOS1064_slgu = -93,
            MacOS1067 = -92,
            MacOS107 = -90,
            MacOS108 = -89,
            MacOS109 = -88,
            MacOS1010 = -87,

            LinuxUnknown = -203,
            Linux22 = -202,
            Linux24 = -201,
            Linux26 = -200,
            Linux32 = -199,
            Linux35 = -198,
            Linux36 = -197,
            Linux310 = -196,

            WinUnknown = 0,
            Win311 = 1,
            Win95 = 2,
            Win98 = 3,
            WinME = 4,
            WinNT = 5,
            Win200 = 6,
            WinXP = 7,
            Win2003 = 8,
            WinVista = 9,
            Win7 = 10,
            Windows7 = 10, // obsolete "renamed to Win7"
            Win2008 = 11,
            Win2012 = 12,
            Win8 = 13,
            Windows8 = 13,// obsolete "renamed to Win8"
            Win81 = 14,
            Windows81 = 14,// obsolete "renamed to Win81"
            Win2012R2 = 15,
            Win10 = 16,

            WinMAX = 15,

            Max = 26
        }

        enum EServerType {
            Invalid = -1,
            First = 0,
            Shell = 0,
            GM = 1,
            BUM = 2,
            AM = 3,
            BS = 4,
            VS = 5,
            ATS = 6,
            CM = 7,
            FBS = 8,
            FG = 9, // obsolete "renamed to BoxMonitor"
            BoxMonitor = 9,
            SS = 10,
            DRMS = 11,
            HubOBSOLETE = 12, //obsolete
            Console = 13,
            ASBOBSOLETE = 14, // obsolete
            PICS = 14,
            Client = 15,
            BootstrapOBSOLETE = 16, // obsolete,
            DP = 17,
            WG = 18,
            SM = 19,
            UFS = 21,
            Util = 23,
            DSS = 24,// obsolete "renamed to Community"
            Community = 24,
            P2PRelayOBSOLETE = 25, //obsolete
            AppInformation = 26,
            Spare = 27,
            FTS = 28,
            EPM = 29,
            PS = 30,
            IS = 31,
            CCS = 32,
            DFS = 33,
            LBS = 34,
            MDS = 35,
            CS = 36,
            GC = 37,
            NS = 38,
            OGS = 39,
            WebAPI = 40,
            UDS = 41,
            MMS = 42,
            GMS = 43,
            KGS = 44,
            UCM = 45,
            RM = 46,
            FS = 47,
            Econ = 48,
            Backpack = 49,
            UGS = 50,
            Store = 51,
            MoneyStats = 52,
            CRE = 53,
            UMQ = 54,
            Workshop = 55,
            BRP = 56,
            GCH = 57,
            MPAS = 58,
            Trade = 59,
            Secrets = 60,
            Logsink = 61,
            Market = 62,
            Quest = 63,
            WDS = 64,
            ACS = 65,
            PNP = 66,
            Max = 67
        }

        enum EBillingType {
            NoCost                  = 0,
            BillOnceOnly            = 1,
            BillMonthly             = 2,
            ProofOfPrepurchaseOnly  = 3,
            GuestPass               = 4,
            HardwarePromo           = 5,
            Gift                    = 6,
            AutoGrant               = 7,
            OEMTicket               = 8,
            RecurringOption         = 9,
            NumBillingTypes         = 10
        }

        enum EActivationCodeClass {
            WonCDKey        = 0,
            ValveCDKey      = 1,
            Doom3CDKey      = 2,
            DBLookup        = 3,
            Steam2010Key    = 4,
            Max             = 5,
            Test            = 2147483647,
            Invalid         = 4294967295
        }

        enum EChatMemberStateChange {
            Entered             = 0x01,
            Left                = 0x02,
            Disconnected        = 0x04,
            Kicked              = 0x08,
            Banned              = 0x10,
            VoiceSpeaking       = 0x1000,
            VoiceDoneSpeaking   = 0x2000
        }

        enum ERegionCode {
            USEast          = 0x00,
            USWest          = 0x01,
            SouthAmerica    = 0x02,
            Europe          = 0x03,
            Asia            = 0x04,
            Australia       = 0x05,
            MiddleEast      = 0x06,
            Africa          = 0x07,
            World           = 0xFF
        }

        enum ECurrencyCode{
            Invalid = 0,
            USD = 1,
            GBP = 2,
            EUR = 3,
            CHF = 4,
            RUB = 5,
            PLN = 6,
            BRL = 7,
            JPY = 8,
            NOK = 9,
            IDR = 10,
            MYR = 11,
            PHP = 12,
            SGD = 13,
            THB = 14,
            VND = 15,
            KRW = 16,
            TRY = 17,
            UAH = 18,
            MXN = 19,
            CAD = 20,
            AUD = 21,
            NZD = 22,
            CNY = 23,
            INR = 24,
            CLP = 25,
            PEN = 26,
            COP = 27,
            ZAR = 28,
            HKD = 29,
            TWD = 30,
            SAR = 31,
            AED = 32,

            Max = 33
        }

        enum EDepotFileFlag {
            UserConfig          = 1,
            VersionedUserConfig = 2,
            Encrypted           = 4,
            ReadOnly            = 8,
            Hidden              = 16,
            Executable          = 32,
            Directory           = 64,
            CustomExecutable    = 128,
            InstallScript       = 256
        }

        enum EWorkshopEnumerationType {
            RankedByVote                = 0,
            Recent                      = 1,
            Trending                    = 2,
            FavoriteOfFriends           = 3,
            VotedByFriends              = 4,
            ContentByFriends            = 5,
            RecentFromFollowedUsers     = 6
        }

        enum EPublishedFileVisibility {
            Public      = 0,
            FriendsOnly = 1,
            Private     = 2,
        }

        enum EWorkshopFileType {
            First                   = 0,
            Community               = 0,
            Microtransaction        = 1,
            Collection              = 2,
            Art                     = 3,
            Video                   = 4,
            Screenshot              = 5,
            Game                    = 6,
            Software                = 7,
            Concept                 = 8,
            WebGuide                = 9,
            IntegratedGuide         = 10,
            Merch                   = 11,
            ControllerBinding       = 12,
            SteamworksAccessInvite  = 13,
            SteamVideo              = 14,
            GameManagedItem         = 15,

            Max                     = 16
        }

        enum EWorkshopFileAction {
            Played      = 0,
            Completed   = 1
        }

        enum EEconTradeResponse {
            Accepted                            = 0,
            Declined                            = 1,
            TradeBannedInitiator                = 2,
            TradeBannedTarget                   = 3,
            TargetAlreadyTrading                = 4,
            Disabled                            = 5,
            NotLoggedIn                         = 6,
            Cancel                              = 7,
            TooSoon                             = 8,
            TooSoonPenalty                      = 9,
            ConnectionFailed                    = 10,
            AlreadyTrading                      = 11,
            AlreadyHasTradeRequest              = 12,
            NoResponse                          = 13,
            CyberCafeInitiator                  = 14,
            CyberCafeTarget                     = 15,
            SchoolLabInitiator                  = 16,
            SchoolLabTarget                     = 16,
            InitiatorBlockedTarget              = 18,
            InitiatorNeedsVerifiedEmail         = 20,
            InitiatorNeedsSteamGuard            = 21,
            TargetAccountCannotTrade            = 22,
            InitiatorSteamGuardDuration         = 23,
            InitiatorPasswordResetProbation     = 24,
            InitiatorNewDeviceCooldown          = 25,
            OKToDeliver                         = 50
        }

        enum EMarketingMessageFlags {
            None                    = 0,
            HighPriority            = 1,
            PlatformWindows         = 2,
            PlatformMac             = 4,
            PlatformLinux           = 8,
            PlatformRestrictions    = PlatformWindows | PlatformMac | PlatformLinux
        }

        enum ENewsUpdateType {
            AppNews         = 0,
            SteamAds        = 1,
            SteamNews       = 2,
            CDDBUpdate      = 3,
            ClientUpdate    = 4
        }

        enum ESystemIMType {
            RawText                     = 0,
            InvalidCard                 = 1,
            RecurringPurchaseFailed     = 2,
            CardWillExpire              = 3,
            SubscriptionExpired         = 4,
            GuestPassReceived           = 5,
            GuestPassGranted            = 6,
            GiftRevoked                 = 7,
            SupportMessage              = 8,
            SupportMessageClearAlert    = 9,

            Max                         = 10
        }

        enum EChatFlags{
            Locked              = 1,
            InvisibleToFriends  = 2,
            Moderated           = 4,
            Unjoinable          = 8
        }

        enum ERemoteStoragePlatform {
            None        = 0,

            Windows     = 1,
            OSX         = 2,
            PS3         = 4,
            Linux       = 8,
            Reserved1   = 8, //obsolete
            Reserved2   = 16,

            All         = -1
        }

        enum EDRMBlobDownloadType{
            Error           = 0,
            File            = 1,
            Parts           = 2,
            Compressed      = 4,
            AllMask         = 7,
            IsJob           = 8,
            HighPriority    = 16,
            AddTimestamp    = 32,
            LowPriority     = 64
        }

        enum EDRMBlobDownloadErrorDetail{
            None                        = 0,

            DownloadFailed              = 1,
            TargetLocked                = 2,
            OpenZip                     = 3,
            ReadZipDirectory            = 4,
            UnexpectedZipEntry          = 5,
            UnzipFullFile               = 6,
            UnknownBlobType             = 7,
            UnzipStrips                 = 8,
            UnzipMergeGuid              = 9,
            UnzipSignature              = 10,
            ApplyStrips                 = 11,
            ApplyMergeGuid              = 12,
            ApplySignature              = 13,
            AppIdMismatch               = 14,
            AppIdUnexpected             = 15,
            AppliedSignatureCorrupt     = 16,
            ApplyValveSignatureHeader   = 17,
            UnzipValveSignatureHeader   = 18,
            PathManipulationError       = 19,

            TargetLocked_Base           = 65536,
            TargetLocked_Max            = 131071,

            NextBase                    = 131072
        }

        enum EClientStat{
            P2PConnectionsUDP       = 0,
            P2PConnectionsRelay     = 1,
            P2PGameConnections      = 2,
            P2PVoiceConnections     = 3,
            BytesDownloaded         = 4,
            Max                     = 5
        }

        enum EClientStatAggregateMethod{
            LatestOnly  = 0,
            Sum         = 1,
            Event       = 2,
            Scalar      = 3
        }

        enum ELeaderboardDataRequest{
            Global              = 0,
            GlobalAroundUser    = 1,
            Friends             = 2,
            Users               = 3
        }

        enum ELeaderboardSortMethod{
            None        = 0,
            Ascending   = 1,
            Descending  = 2
        }

        enum ELeaderboardDisplayType{
            None                = 0,
            Numeric             = 1,
            TimeSeconds         = 2,
            TimeMilliSeconds    = 3
        }

        enum ELeaderboardUploadScoreMethod{
            None            = 0,
            KeepBest        = 1,
            ForceUpdate     = 2,
        }

        enum EUCMFilePrivacyState{
            Invalid         = -1,
            Private         = 2,
            FriendsOnly     = 4,
            Public          = 8,
            All             = Public | FriendsOnly | Private // 14
        }
    }

    /**
     * https://github.com/DoctorMcKay/node-steam-user/blob/master/resources/ECurrencyCode.js
     */
    enum ECurrencyCode{
        Invalid = 0,
        USD = 1,
        GBP = 2,
        EUR = 3,
        CHF = 4,
        RUB = 5,
        PLN = 6,
        BRL = 7,
        JPY = 8,
        NOK = 9,
        IDR = 10,
        MYR = 11,
        PHP = 12,
        SGD = 13,
        THB = 14,
        VND = 15,
        KRW = 16,
        TRY = 17,
        UAH = 18,
        MXN = 19,
        CAD = 20,
        AUD = 21,
        NZD = 22,
        CNY = 23,
        INR = 24,
        CLP = 25,
        PEN = 26,
        COP = 27,
        ZAR = 28,
        HKD = 29,
        TWD = 30,
        SAR = 31,
        AED = 32
    }

    function formatCurrency(amount: number, currency: Steam.ECurrencyCode): string;


    function generateAuthCode(secret: string, timeOffset: number);


}

declare class SteamUser {

}


declare module "steam-user" {
    export  = SteamUser;
}


