/**
 * ============================================================
 * CLICKFUN.IO - FRONTEND APPLICATION ENGINE v3.0
 * iOS Modern Design | Multi-Mode (60s & Endless) | Mock Fallback
 * Lightning Boost Skill | News Ticker | Unified Database Schema
 * Event System | Skin Collection | Dynamic Theme Engine
 * ============================================================
 */

const CONFIG = {
    API_BASE_URL: 'https://script.google.com/macros/s/AKfycbz3mb-CXEEsTRJw2VogC0jqzfPmoWFcyPG04YjvrRPHJWghJI-VcMVfxD04oRoRKs_xCQ/exec',
    GAME_DURATION: 60,
    MAX_RETRIES: 5,
    INITIAL_RETRY_DELAY: 1000,
    RETRY_MULTIPLIER: 2,
    LEADERBOARD_REFRESH_INTERVAL: 8000,
    EVENT_END_TIME: new Date('2026-07-17T21:23:00').getTime(),
    FLAGS: {
        'US': '\u{1F1FA}\u{1F1F8}', 'ID': '\u{1F1EE}\u{1F1E9}', 'GB': '\u{1F1EC}\u{1F1E7}',
        'JP': '\u{1F1EF}\u{1F1F5}', 'KR': '\u{1F1F0}\u{1F1F7}', 'DE': '\u{1F1E9}\u{1F1EA}',
        'FR': '\u{1F1EB}\u{1F1F7}', 'BR': '\u{1F1E7}\u{1F1F7}', 'IN': '\u{1F1EE}\u{1F1F3}',
        'AU': '\u{1F1E6}\u{1F1FA}', 'CA': '\u{1F1E8}\u{1F1E6}', 'IT': '\u{1F1EE}\u{1F1F9}',
        'ES': '\u{1F1EA}\u{1F1F8}', 'RU': '\u{1F1F7}\u{1F1FA}', 'CN': '\u{1F1E8}\u{1F1F3}',
        'MX': '\u{1F1F2}\u{1F1FD}', 'NL': '\u{1F1F3}\u{1F1F1}', 'SG': '\u{1F1F8}\u{1F1EC}',
        'MY': '\u{1F1F2}\u{1F1FE}', 'TH': '\u{1F1F9}\u{1F1ED}', 'PH': '\u{1F1F5}\u{1F1ED}',
        'VN': '\u{1F1FB}\u{1F1F3}', 'TR': '\u{1F1F9}\u{1F1F7}', 'SA': '\u{1F1F8}\u{1F1E6}',
        'ZA': '\u{1F1FF}\u{1F1E6}', 'AR': '\u{1F1E6}\u{1F1F7}', 'SE': '\u{1F1F8}\u{1F1EA}',
        'NO': '\u{1F1F3}\u{1F1F4}', 'FI': '\u{1F1EB}\u{1F1EE}', 'PL': '\u{1F1F5}\u{1F1F1}',
        'CH': '\u{1F1E8}\u{1F1ED}', 'BE': '\u{1F1E7}\u{1F1EA}', 'AT': '\u{1F1E6}\u{1F1F9}',
        'DK': '\u{1F1E9}\u{1F1F0}', 'PT': '\u{1F1F5}\u{1F1F9}', 'GR': '\u{1F1EC}\u{1F1F7}',
        'IL': '\u{1F1EE}\u{1F1F1}', 'AE': '\u{1F1E6}\u{1F1EA}', 'NZ': '\u{1F1F3}\u{1F1FF}',
        'IE': '\u{1F1EE}\u{1F1EA}', 'CZ': '\u{1F1E8}\u{1F1FF}', 'HU': '\u{1F1ED}\u{1F1FA}',
        'RO': '\u{1F1F7}\u{1F1F4}', 'UA': '\u{1F1FA}\u{1F1E6}', 'CL': '\u{1F1E8}\u{1F1F1}',
        'CO': '\u{1F1E8}\u{1F1F4}', 'PE': '\u{1F1F5}\u{1F1EA}', 'EG': '\u{1F1EA}\u{1F1EC}',
        'NG': '\u{1F1F3}\u{1F1EC}', 'KE': '\u{1F1F0}\u{1F1EA}', 'PK': '\u{1F1F5}\u{1F1F0}',
        'BD': '\u{1F1E7}\u{1F1E9}', 'LK': '\u{1F1F1}\u{1F1F0}', 'MM': '\u{1F1F2}\u{1F1F2}',
        'KH': '\u{1F1F0}\u{1F1ED}', 'LA': '\u{1F1F1}\u{1F1E6}', 'MN': '\u{1F1F2}\u{1F1F3}',
        'NP': '\u{1F1F3}\u{1F1F5}', 'BT': '\u{1F1E7}\u{1F1F9}', 'AF': '\u{1F1E6}\u{1F1EB}',
        'IR': '\u{1F1EE}\u{1F1F7}', 'IQ': '\u{1F1EE}\u{1F1F6}', 'JO': '\u{1F1EF}\u{1F1F4}',
        'LB': '\u{1F1F1}\u{1F1E7}', 'SY': '\u{1F1F8}\u{1F1FE}', 'YE': '\u{1F1FE}\u{1F1EA}',
        'OM': '\u{1F1F4}\u{1F1F2}', 'QA': '\u{1F1F6}\u{1F1E6}', 'KW': '\u{1F1F0}\u{1F1FC}',
        'BH': '\u{1F1E7}\u{1F1ED}', 'KZ': '\u{1F1F0}\u{1F1FF}', 'UZ': '\u{1F1FA}\u{1F1FF}',
        'KG': '\u{1F1F0}\u{1F1EC}', 'TJ': '\u{1F1F9}\u{1F1EF}', 'TM': '\u{1F1F9}\u{1F1F2}',
        'AZ': '\u{1F1E6}\u{1F1FF}', 'GE': '\u{1F1EC}\u{1F1EA}', 'AM': '\u{1F1E6}\u{1F1F2}',
        'MD': '\u{1F1F2}\u{1F1E9}', 'BY': '\u{1F1E7}\u{1F1FE}', 'LT': '\u{1F1F1}\u{1F1F9}',
        'LV': '\u{1F1F1}\u{1F1FB}', 'EE': '\u{1F1EA}\u{1F1EA}', 'SK': '\u{1F1F8}\u{1F1F0}',
        'SI': '\u{1F1F8}\u{1F1EE}', 'HR': '\u{1F1ED}\u{1F1F7}', 'BA': '\u{1F1E7}\u{1F1E6}',
        'RS': '\u{1F1F7}\u{1F1F8}', 'ME': '\u{1F1F2}\u{1F1EA}', 'MK': '\u{1F1F2}\u{1F1F0}',
        'AL': '\u{1F1E6}\u{1F1F1}', 'BG': '\u{1F1E7}\u{1F1EC}', 'IS': '\u{1F1EE}\u{1F1F8}',
        'MT': '\u{1F1F2}\u{1F1F9}', 'CY': '\u{1F1E8}\u{1F1FE}', 'LU': '\u{1F1F1}\u{1F1FA}',
        'MC': '\u{1F1F2}\u{1F1E8}', 'LI': '\u{1F1F1}\u{1F1EE}', 'SM': '\u{1F1F8}\u{1F1F2}',
        'AD': '\u{1F1E6}\u{1F1E9}', 'VA': '\u{1F1FB}\u{1F1E6}', 'MA': '\u{1F1F2}\u{1F1E6}',
        'DZ': '\u{1F1E9}\u{1F1FF}', 'TN': '\u{1F1F9}\u{1F1F3}', 'LY': '\u{1F1F1}\u{1F1FE}',
        'SD': '\u{1F1F8}\u{1F1E9}', 'ET': '\u{1F1EA}\u{1F1F9}', 'GH': '\u{1F1EC}\u{1F1ED}',
        'TZ': '\u{1F1F9}\u{1F1FF}', 'UG': '\u{1F1FA}\u{1F1EC}', 'RW': '\u{1F1F7}\u{1F1FC}',
        'MZ': '\u{1F1F2}\u{1F1FF}', 'ZM': '\u{1F1FF}\u{1F1F2}', 'ZW': '\u{1F1FF}\u{1F1FC}',
        'BW': '\u{1F1E7}\u{1F1FC}', 'NA': '\u{1F1F3}\u{1F1E6}', 'AO': '\u{1F1E6}\u{1F1F4}',
        'CM': '\u{1F1E8}\u{1F1F2}', 'CI': '\u{1F1E8}\u{1F1EE}', 'SN': '\u{1F1F8}\u{1F1F3}',
        'ML': '\u{1F1F2}\u{1F1F1}', 'BF': '\u{1F1E7}\u{1F1EB}', 'NE': '\u{1F1F3}\u{1F1EA}',
        'TD': '\u{1F1F9}\u{1F1E9}', 'MR': '\u{1F1F2}\u{1F1F7}', 'GM': '\u{1F1EC}\u{1F1F2}',
        'GN': '\u{1F1EC}\u{1F1F3}', 'SL': '\u{1F1F8}\u{1F1F1}', 'LR': '\u{1F1F1}\u{1F1F7}',
        'TG': '\u{1F1F9}\u{1F1EC}', 'BJ': '\u{1F1E7}\u{1F1EF}', 'GA': '\u{1F1EC}\u{1F1E6}',
        'CG': '\u{1F1E8}\u{1F1EC}', 'CD': '\u{1F1E8}\u{1F1E9}', 'CF': '\u{1F1E8}\u{1F1EB}',
        'GQ': '\u{1F1EC}\u{1F1F6}', 'ST': '\u{1F1F8}\u{1F1F9}', 'CV': '\u{1F1E8}\u{1F1FB}',
        'SC': '\u{1F1F8}\u{1F1E8}', 'MU': '\u{1F1F2}\u{1F1FA}', 'MG': '\u{1F1F2}\u{1F1EC}',
        'KM': '\u{1F1F0}\u{1F1F2}', 'DJ': '\u{1F1E9}\u{1F1EF}', 'ER': '\u{1F1EA}\u{1F1F7}',
        'SO': '\u{1F1F8}\u{1F1F4}', 'SS': '\u{1F1F8}\u{1F1F8}', 'BI': '\u{1F1E7}\u{1F1EE}',
        'MW': '\u{1F1F2}\u{1F1FC}', 'LS': '\u{1F1F1}\u{1F1F8}', 'SZ': '\u{1F1F8}\u{1F1FF}',
        'VE': '\u{1F1FB}\u{1F1EA}', 'GY': '\u{1F1EC}\u{1F1FE}', 'SR': '\u{1F1F8}\u{1F1F7}',
        'GF': '\u{1F1EC}\u{1F1EB}', 'EC': '\u{1F1EA}\u{1F1E8}', 'BO': '\u{1F1E7}\u{1F1F4}',
        'PY': '\u{1F1F5}\u{1F1FE}', 'UY': '\u{1F1FA}\u{1F1FE}', 'FK': '\u{1F1EB}\u{1F1F0}',
        'JM': '\u{1F1EF}\u{1F1F2}', 'HT': '\u{1F1ED}\u{1F1F9}', 'DO': '\u{1F1E9}\u{1F1F4}',
        'CU': '\u{1F1E8}\u{1F1FA}', 'PR': '\u{1F1F5}\u{1F1F7}', 'TT': '\u{1F1F9}\u{1F1F9}',
        'BB': '\u{1F1E7}\u{1F1E7}', 'GD': '\u{1F1EC}\u{1F1E9}', 'LC': '\u{1F1F1}\u{1F1E8}',
        'VC': '\u{1F1FB}\u{1F1E8}', 'KN': '\u{1F1F0}\u{1F1F3}', 'AG': '\u{1F1E6}\u{1F1EC}',
        'DM': '\u{1F1E9}\u{1F1F2}', 'BS': '\u{1F1E7}\u{1F1F8}', 'BZ': '\u{1F1E7}\u{1F1FF}',
        'GT': '\u{1F1EC}\u{1F1F9}', 'HN': '\u{1F1ED}\u{1F1F3}', 'SV': '\u{1F1F8}\u{1F1FB}',
        'NI': '\u{1F1F3}\u{1F1EE}', 'CR': '\u{1F1E8}\u{1F1F7}', 'PA': '\u{1F1F5}\u{1F1E6}',
        'GL': '\u{1F1EC}\u{1F1F1}', 'FJ': '\u{1F1EB}\u{1F1EF}', 'PG': '\u{1F1F5}\u{1F1EC}',
        'SB': '\u{1F1F8}\u{1F1E7}', 'VU': '\u{1F1FB}\u{1F1FA}', 'NC': '\u{1F1F3}\u{1F1E8}',
        'PF': '\u{1F1F5}\u{1F1EB}', 'WS': '\u{1F1FC}\u{1F1F8}', 'TO': '\u{1F1F9}\u{1F1F4}',
        'KI': '\u{1F1F0}\u{1F1EE}', 'TV': '\u{1F1F9}\u{1F1FB}', 'NR': '\u{1F1F3}\u{1F1F7}',
        'PW': '\u{1F1F5}\u{1F1FC}', 'MH': '\u{1F1F2}\u{1F1ED}', 'FM': '\u{1F1EB}\u{1F1F2}',
        'GU': '\u{1F1EC}\u{1F1FA}', 'MP': '\u{1F1F2}\u{1F1F5}', 'AS': '\u{1F1E6}\u{1F1F8}',
        'CK': '\u{1F1E8}\u{1F1F0}', 'NU': '\u{1F1F3}\u{1F1FA}', 'TK': '\u{1F1F9}\u{1F1F0}',
        'WF': '\u{1F1FC}\u{1F1EB}', 'PN': '\u{1F1F5}\u{1F1F3}', 'IO': '\u{1F1EE}\u{1F1F4}',
        'CX': '\u{1F1E8}\u{1F1FD}', 'CC': '\u{1F1E8}\u{1F1E8}', 'NF': '\u{1F1F3}\u{1F1EB}',
        'HM': '\u{1F1ED}\u{1F1F2}', 'AQ': '\u{1F1E6}\u{1F1F6}', 'BV': '\u{1F1E7}\u{1F1FB}',
        'TF': '\u{1F1F9}\u{1F1EB}', 'GS': '\u{1F1EC}\u{1F1F8}', 'UM': '\u{1F1FA}\u{1F1F2}',
        'Other': '\u{1F30D}'
    }
};

/* ============================================
   MOCK API ENGINE (Fallback)
   ============================================ */
const MockEngine = {
    users: [],
    leaderboard60s: [],
    leaderboardEndless: [],

    init() {
        const flags = ['US', 'JP', 'GB', 'DE', 'ID', 'KR', 'FR', 'BR'];
        const names60s = ['SpeedDemon', 'ClickMaster', 'TapKing', 'FingerFly', 'SwiftTap', 'ClickNinja', 'TapBeast', 'RapidFire'];
        for (let i = 0; i < 8; i++) {
            this.leaderboard60s.push({
                username: names60s[i],
                countryFlag: flags[i],
                highScore: 350 - (i * 25),
                highestTime: 0,
                timestamp: `2026-07-09 ${10 + i}:00:00`
            });
        }
        const eNames = ['MarathonPro', 'EnduranceKing', 'StaminaStar', 'LongRun', 'TapMarathon'];
        for (let i = 0; i < 5; i++) {
            this.leaderboardEndless.push({
                username: eNames[i],
                countryFlag: flags[i],
                highScore: 3000 - (i * 300),
                highestTime: 3600 - (i * 300),
                timestamp: `2026-07-09 ${10 + i}:00:00`
            });
        }
    },

    handle(action, data) {
        const ts = () => {
            const n = new Date();
            return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')} ${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`;
        };

        switch(action) {
            case 'register': {
                const existing = this.users.find(u => u.username.toLowerCase() === (data.username || '').toLowerCase());
                if (existing) return { success: false, error: 'Username has already been taken', code: 'DUPLICATE_USERNAME' };
                const user = {
                    username: data.username,
                    password: data.password,
                    countryFlag: data.countryFlag,
                    highScore: 0,
                    highestTime: 0,
                    highestClicks: 0,
                    timestamp: ts(),
                    ownedSkins: ['default'],
                    activeSkin: 'default',
                    eventClaimed: false,
                    eventMissionCompleted: false,
                    eventMissionFailed: false
                };
                this.users.push(user);
                return { success: true, user: { username: user.username, countryFlag: user.countryFlag, highScore: 0, highestTime: 0, highestClicks: 0, ownedSkins: ['default'], activeSkin: 'default' }};
            }
            case 'login': {
                const user = this.users.find(u => u.username.toLowerCase() === (data.username || '').toLowerCase() && u.password === data.password);
                if (!user) return { success: false, error: 'Invalid username or password', code: 'AUTH_FAILED' };
                return { success: true, user: { username: user.username, countryFlag: user.countryFlag, highScore: user.highScore, highestTime: user.highestTime, highestClicks: user.highestClicks, ownedSkins: user.ownedSkins || ['default'], activeSkin: user.activeSkin || 'default' }};
            }
            case 'saveHighScore': {
                const user = this.users.find(u => u.username.toLowerCase() === (data.username || '').toLowerCase());
                if (!user) return { success: false, error: 'User not found', code: 'USER_NOT_FOUND' };
                const mode = data.mode || '60s';
                const score = parseInt(data.highScore || data.highestClicks) || 0;
                const duration = parseInt(data.durationSeconds || data.highestTimeSeconds) || 0;
                user.timestamp = ts();

                if (mode === 'endless') {
                    let updated = false;
                    if (score > (user.highestClicks || 0)) { user.highestClicks = score; updated = true; }
                    if (duration > (user.highestTime || 0)) { user.highestTime = duration; updated = true; }
                    const existing = this.leaderboardEndless.find(e => e.username === user.username);
                    if (existing) {
                        existing.highScore = user.highestClicks;
                        existing.highestTime = user.highestTime;
                        existing.timestamp = user.timestamp;
                    } else {
                        this.leaderboardEndless.push({ username: user.username, countryFlag: user.countryFlag, highScore: user.highestClicks, highestTime: user.highestTime, timestamp: user.timestamp });
                    }
                    this.leaderboardEndless.sort((a, b) => {
                        if (b.highScore !== a.highScore) return b.highScore - a.highScore;
                        if (b.highestTime !== a.highestTime) return b.highestTime - a.highestTime;
                        return (a.timestamp || '').localeCompare(b.timestamp || '');
                    });
                    return { success: true, message: 'Endless score saved', highestClicks: user.highestClicks, highestTimeSeconds: user.highestTime, newBest: updated };
                } else {
                    if (score > user.highScore) {
                        user.highScore = score;
                        const existing = this.leaderboard60s.find(e => e.username === user.username);
                        if (existing) {
                            existing.highScore = score;
                            existing.timestamp = user.timestamp;
                        } else {
                            this.leaderboard60s.push({ username: user.username, countryFlag: user.countryFlag, highScore: score, timestamp: user.timestamp });
                        }
                        this.leaderboard60s.sort((a, b) => b.highScore - a.highScore);
                        return { success: true, message: 'New personal best saved!', highScore: score, newBest: true };
                    }
                    return { success: true, message: 'Score not updated', highScore: user.highScore, newBest: false };
                }
            }
            case 'getLeaderboard': {
                const mode = data.mode || '60s';
                if (mode === 'endless') {
                    return { success: true, data: this.leaderboardEndless.slice(0, 100), totalPlayers: this.leaderboardEndless.length };
                }
                return { success: true, data: this.leaderboard60s.slice(0, 100), totalPlayers: this.leaderboard60s.length };
            }
            case 'getUserStats': {
                const user = this.users.find(u => u.username.toLowerCase() === (data.username || '').toLowerCase());
                if (!user) return { success: false, error: 'User not found', code: 'USER_NOT_FOUND' };
                return { success: true, user: { username: user.username, countryFlag: user.countryFlag, highScore: user.highScore, highestClicks: user.highestClicks, highestTime: user.highestTime, timestamp: user.timestamp }};
            }
            case 'getNews': {
                return { success: true, newsText: 'Welcome to ClickFun.io v3.0! Events, Skins and Lightning Boost are now live!', newsStatus: 'ON' };
            }
            case 'getEventStatus': {
                const now = new Date().getTime();
                const eventEnd = CONFIG.EVENT_END_TIME;
                const isActive = now < eventEnd;
                const user = this.users.find(u => u.username.toLowerCase() === (data.username || '').toLowerCase());
                return {
                    success: true,
                    eventActive: isActive,
                    eventEndTime: eventEnd,
                    claimed: user?.eventClaimed || false,
                    missionCompleted: user?.eventMissionCompleted || false,
                    missionFailed: user?.eventMissionFailed || false
                };
            }
            case 'claimEventReward': {
                const user = this.users.find(u => u.username.toLowerCase() === (data.username || '').toLowerCase());
                if (!user) return { success: false, error: 'User not found', code: 'USER_NOT_FOUND' };
                if (user.eventClaimed) return { success: false, error: 'Already claimed', code: 'ALREADY_CLAIMED' };
                const clicks = parseInt(data.proofClicks) || 0;
                const duration = parseInt(data.proofDuration) || 0;
                if (duration < 300 || clicks < 10000) {
                    return { success: false, error: 'Mission requirements not met', code: 'MISSION_FAILED' };
                }
                user.eventClaimed = true;
                if (!user.ownedSkins) user.ownedSkins = ['default'];
                if (!user.ownedSkins.includes('dark_premium')) user.ownedSkins.push('dark_premium');
                return { success: true, message: 'Reward claimed', ownedSkins: user.ownedSkins };
            }
            case 'getUserSkins': {
                const user = this.users.find(u => u.username.toLowerCase() === (data.username || '').toLowerCase());
                if (!user) return { success: false, error: 'User not found', code: 'USER_NOT_FOUND' };
                return {
                    success: true,
                    ownedSkins: user.ownedSkins || ['default'],
                    activeSkin: user.activeSkin || 'default'
                };
            }
            case 'setActiveSkin': {
                const user = this.users.find(u => u.username.toLowerCase() === (data.username || '').toLowerCase());
                if (!user) return { success: false, error: 'User not found', code: 'USER_NOT_FOUND' };
                if (!user.ownedSkins?.includes(data.skinId)) return { success: false, error: 'Skin not owned', code: 'SKIN_NOT_OWNED' };
                user.activeSkin = data.skinId;
                return { success: true, activeSkin: data.skinId };
            }
            default:
                return { success: false, error: 'Unknown action: ' + action, code: 'UNKNOWN_ACTION' };
        }
    }
};

MockEngine.init();

/* ============================================
   STATE MANAGEMENT
   ============================================ */
const State = {
    currentView: 'loading',
    currentUser: null,
    currentSlide: 0,
    totalSlides: 5,
    currentMode: '60s',
    gameActive: false,
    gamePaused: false,
    clickCount: 0,
    timerValue: CONFIG.GAME_DURATION,
    timerInterval: null,
    leaderboardInterval: null,
    leaderboardData60s: [],
    leaderboardDataEndless: [],
    personalBest: 0,
    globalRank: '--',
    endlessStats: { highestClicks: 0, highestTime: 0 },
    endlessRank: '--',
    skillClicks: 0,
    isSkillReady: false,
    isSkillActive: false,
    skillTimer: null,
    activeMultiplier: 1,
    skillDuration: 20,
    skillMaxClicks: 500,
    newsText: '',
    newsStatus: 'OFF',
    
    // Event System
    eventConfig: {
        active: true,
        endTime: CONFIG.EVENT_END_TIME,
        requiredDuration: 300,
        requiredClicks: 10000
    },
    eventClaimed: false,
    eventMissionCompleted: false,
    eventMissionFailed: false,
    eventPopupDismissed: false,
    missionTracking: false,
    missionClicksAtEval: 0,
    missionDuration: 0,
    
    // Skin Collection
    ownedSkins: ['default'],
    activeSkin: 'default',

    setUser(user) {
        this.currentUser = user;
        this.personalBest = user?.highScore || 0;
        this.endlessStats = {
            highestClicks: user?.highestClicks || 0,
            highestTime: user?.highestTime || 0
        };
        this.ownedSkins = user?.ownedSkins || ['default'];
        this.activeSkin = user?.activeSkin || 'default';
        this.eventClaimed = user?.eventClaimed || false;
        this.eventMissionCompleted = user?.eventMissionCompleted || false;
        this.eventMissionFailed = user?.eventMissionFailed || false;
    },

    clearUser() {
        this.currentUser = null;
        this.personalBest = 0;
        this.globalRank = '--';
        this.endlessStats = { highestClicks: 0, highestTime: 0 };
        this.endlessRank = '--';
        this.skillClicks = 0;
        this.isSkillReady = false;
        this.isSkillActive = false;
        this.activeMultiplier = 1;
        this.ownedSkins = ['default'];
        this.activeSkin = 'default';
        this.eventClaimed = false;
        this.eventMissionCompleted = false;
        this.eventMissionFailed = false;
        this.eventPopupDismissed = false;
        this.missionTracking = false;
        if (this.skillTimer) {
            clearInterval(this.skillTimer);
            this.skillTimer = null;
        }
    }
};

/* ============================================
   DOM REFERENCES
   ============================================ */
const DOM = {};

function cacheDOM() {
    DOM.viewLoading = document.getElementById('view-loading');
    DOM.viewOnboard = document.getElementById('view-onboard');
    DOM.viewAuth = document.getElementById('view-auth');
    DOM.viewDashboard = document.getElementById('view-dashboard');

    DOM.onboardSlides = document.getElementById('onboard-slides');
    DOM.onboardDots = document.getElementById('onboard-dots');
    DOM.navPrev = document.getElementById('nav-prev');
    DOM.navNext = document.getElementById('nav-next');
    DOM.btnStartJourney = document.getElementById('btn-start-journey');

    DOM.authTabs = document.querySelectorAll('.auth-tab');
    DOM.authTabIndicator = document.querySelector('.auth-tab-indicator');
    DOM.formLogin = document.getElementById('form-login');
    DOM.formRegister = document.getElementById('form-register');
    DOM.btnLogin = document.getElementById('btn-login');
    DOM.btnRegister = document.getElementById('btn-register');
    DOM.togglePasswordBtns = document.querySelectorAll('.toggle-password');

    DOM.dashUsername = document.getElementById('dash-username');
    DOM.dashAvatar = document.getElementById('dash-avatar');
    DOM.btnLogout = document.getElementById('btn-logout');
    DOM.btnStartGame = document.getElementById('btn-start-game');
    DOM.previewHighscore = document.getElementById('preview-highscore');
    DOM.previewRank = document.getElementById('preview-rank');
    DOM.sectionPlay = document.getElementById('section-play');
    DOM.sectionLeaderboard = document.getElementById('section-leaderboard');
    DOM.sectionEvent = document.getElementById('section-event');
    DOM.sectionCollection = document.getElementById('section-collection');
    DOM.navItems = document.querySelectorAll('.nav-item');

    DOM.modeSlides = document.getElementById('mode-slides');
    DOM.modeDots = document.getElementById('mode-dots');
    DOM.statsGroups = document.querySelectorAll('.stats-group');
    DOM.playCardTitle = document.getElementById('play-card-title');
    DOM.playCardDesc = document.getElementById('play-card-desc');
    DOM.previewEndlessTime = document.getElementById('preview-endless-time');
    DOM.previewEndlessClicks = document.getElementById('preview-endless-clicks');

    DOM.gameArena = document.getElementById('game-arena');
    DOM.gameClicks = document.getElementById('game-clicks');
    DOM.gameTimer = document.getElementById('game-timer');
    DOM.gameHighscore = document.getElementById('game-highscore');
    DOM.gameHighscoreLabel = document.getElementById('game-highscore-label');
    DOM.timerProgress = document.getElementById('timer-progress');
    DOM.btnPause = document.getElementById('btn-pause');
    DOM.gameZone = document.getElementById('game-zone');
    DOM.clickRipples = document.getElementById('click-ripples');
    DOM.gameZoneHint = document.getElementById('game-zone-hint');
    DOM.timerRingContainer = document.getElementById('timer-ring-container');
    DOM.stopwatchDisplay = document.getElementById('stopwatch-display');
    DOM.gameStopwatch = document.getElementById('game-stopwatch');

    DOM.modalGameover = document.getElementById('modal-gameover');
    DOM.modalPause = document.getElementById('modal-pause');
    DOM.modalEventPopup = document.getElementById('modal-event-popup');
    DOM.resultScore = document.getElementById('result-score');
    DOM.resultBest = document.getElementById('result-best');
    DOM.resultLabelPrimary = document.getElementById('result-label-primary');
    DOM.resultLabelSecondary = document.getElementById('result-label-secondary');
    DOM.modalTitle = document.getElementById('modal-title');
    DOM.modalSubtitle = document.getElementById('modal-subtitle');
    DOM.btnRestartGame = document.getElementById('btn-restart-game');
    DOM.btnReturnMenu = document.getElementById('btn-return-menu');
    DOM.btnViewLb = document.getElementById('btn-view-lb');
    DOM.btnResume = document.getElementById('btn-resume');
    DOM.btnQuitGame = document.getElementById('btn-quit-game');
    DOM.btnQuitText = document.getElementById('btn-quit-text');
    DOM.btnGoEvent = document.getElementById('btn-go-event');
    DOM.btnCloseEventPopup = document.getElementById('btn-close-event-popup');

    DOM.lbModeTabs = document.querySelectorAll('.lb-mode-tab');
    DOM.lbModeIndicator = document.querySelector('.lb-mode-indicator');
    DOM.lbPanel60s = document.getElementById('lb-panel-60s');
    DOM.lbPanelEndless = document.getElementById('lb-panel-endless');
    DOM.lbList60s = document.getElementById('lb-list-60s');
    DOM.lbListEndless = document.getElementById('lb-list-endless');

    DOM.toastContainer = document.getElementById('toast-container');

    DOM.newsTickerContainer = document.getElementById('news-ticker-container');
    DOM.newsTickerText = document.getElementById('news-ticker-text');
    DOM.skillBoostContainer = document.getElementById('btn-skill-boost');
    DOM.skillRingProgress = document.getElementById('skill-ring-progress');
    DOM.skillIconLightning = document.getElementById('skill-icon-lightning');

    DOM.eventCountdown = document.getElementById('event-countdown');
    DOM.eventStatusText = document.getElementById('event-status-text');
    DOM.btnClaimReward = document.getElementById('btn-claim-reward');
    DOM.skinsGrid = document.getElementById('skins-grid');
}

/* ============================================
   VIEW NAVIGATION
   ============================================ */
function switchView(viewName) {
    const views = ['view-loading', 'view-onboard', 'view-auth', 'view-dashboard'];
    views.forEach(v => {
        const el = document.getElementById(v);
        if (el) el.classList.remove('active');
    });

    const target = document.getElementById(`view-${viewName}`);
    if (target) {
        target.classList.add('active');
        State.currentView = viewName;
    }
}

/* ============================================
   TOAST NOTIFICATIONS
   ============================================ */
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,
        error: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
        warning: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
        info: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
    };

    toast.innerHTML = `${icons[type] || icons.info}<span>${escapeHtml(message)}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        toast.addEventListener('animationend', () => toast.remove());
    }, duration);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/* ============================================
   API CLIENT WITH MOCK FALLBACK
   ============================================ */
async function apiRequest(action, data = {}, method = 'POST') {
    let retries = 0;
    let delay = CONFIG.INITIAL_RETRY_DELAY;

    while (retries <= CONFIG.MAX_RETRIES) {
        try {
            let response;

            if (method === 'GET') {
                const params = new URLSearchParams({ action, ...data });
                const url = `${CONFIG.API_BASE_URL}?${params.toString()}`;
                response = await fetch(url, { method: 'GET', redirect: 'follow' });
            } else {
                response = await fetch(CONFIG.API_BASE_URL, {
                    method: 'POST',
                    redirect: 'follow',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify({ action, ...data })
                });
            }

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            return result;

        } catch (error) {
            retries++;
            if (retries > CONFIG.MAX_RETRIES) {
                console.warn('API fallback to mock engine:', error.message);
                return MockEngine.handle(action, data);
            }
            showToast(`Retrying... (${retries}/${CONFIG.MAX_RETRIES})`, 'warning', 1500);
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= CONFIG.RETRY_MULTIPLIER;
        }
    }
}

/* ============================================
   VIEW 1: LOADING SCREEN
   ============================================ */
function initLoadingScreen() {
    setTimeout(() => {
        switchView('onboard');
    }, 2500);
}

/* ============================================
   VIEW 2: ONBOARDING SLIDER
   ============================================ */
function initOnboarding() {
    updateSlide(0);

    DOM.navPrev.addEventListener('click', () => {
        if (State.currentSlide > 0) updateSlide(State.currentSlide - 1);
    });

    DOM.navNext.addEventListener('click', () => {
        if (State.currentSlide < State.totalSlides - 1) updateSlide(State.currentSlide + 1);
    });

    DOM.btnStartJourney.addEventListener('click', () => {
        switchView('auth');
    });

    DOM.onboardDots.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => {
            updateSlide(parseInt(dot.dataset.index));
        });
    });

    let touchStartX = 0;
    let touchEndX = 0;

    DOM.onboardSlides.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    DOM.onboardSlides.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && State.currentSlide < State.totalSlides - 1) {
                updateSlide(State.currentSlide + 1);
            } else if (diff < 0 && State.currentSlide > 0) {
                updateSlide(State.currentSlide - 1);
            }
        }
    }
}

function updateSlide(index) {
    const slides = DOM.onboardSlides.querySelectorAll('.onboard-slide');
    const dots = DOM.onboardDots.querySelectorAll('.dot');

    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev');
        if (i === index) slide.classList.add('active');
        else if (i < index) slide.classList.add('prev');
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    State.currentSlide = index;

    DOM.navPrev.disabled = index === 0;
    DOM.navNext.disabled = index === State.totalSlides - 1;
    DOM.navNext.style.opacity = index === State.totalSlides - 1 ? '0' : '1';
    DOM.navNext.style.pointerEvents = index === State.totalSlides - 1 ? 'none' : 'auto';
}

/* ============================================
   VIEW 3: AUTHENTICATION
   ============================================ */
function initAuth() {
    DOM.authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            DOM.authTabs.forEach(t => t.classList.toggle('active', t === tab));

            if (targetTab === 'register') {
                DOM.authTabIndicator.classList.add('register');
                DOM.formLogin.classList.remove('active');
                DOM.formRegister.classList.add('active');
            } else {
                DOM.authTabIndicator.classList.remove('register');
                DOM.formLogin.classList.add('active');
                DOM.formRegister.classList.remove('active');
            }

            clearFormErrors();
        });
    });

    DOM.togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            const eyeOpen = btn.querySelector('.eye-open');
            const eyeClosed = btn.querySelector('.eye-closed');

            if (input.type === 'password') {
                input.type = 'text';
                eyeOpen.style.display = 'none';
                eyeClosed.style.display = 'block';
            } else {
                input.type = 'password';
                eyeOpen.style.display = 'block';
                eyeClosed.style.display = 'none';
            }
        });
    });

    DOM.formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearFormErrors();

        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;

        let hasError = false;
        if (!username) { showFieldError('login-username', 'Username is required'); hasError = true; }
        if (!password) { showFieldError('login-password', 'Password is required'); hasError = true; }
        if (hasError) return;

        setButtonLoading(DOM.btnLogin, true);

        try {
            const result = await apiRequest('login', { username, password });
            if (result.success) {
                State.setUser(result.user);
                showToast('Welcome back, ' + username + '!', 'success');
                enterDashboard();
            } else {
                showToast(result.error || 'Invalid credentials', 'error');
                showFieldError('login-password', result.error || 'Invalid username or password');
            }
        } catch (error) {
            showToast(error.message, 'error');
        } finally {
            setButtonLoading(DOM.btnLogin, false);
        }
    });

    DOM.formRegister.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearFormErrors();

        const username = document.getElementById('reg-username').value.trim();
        const password = document.getElementById('reg-password').value;
        const confirm = document.getElementById('reg-confirm').value;
        const country = document.getElementById('reg-country').value;

        let hasError = false;
        if (!username || username.length < 3) { showFieldError('reg-username', 'Username must be at least 3 characters'); hasError = true; }
        if (!password || password.length < 4) { showFieldError('reg-password', 'Password must be at least 4 characters'); hasError = true; }
        if (password !== confirm) { showFieldError('reg-confirm', 'Passwords do not match'); hasError = true; }
        if (!country) { showFieldError('reg-country', 'Please select a country'); hasError = true; }
        if (hasError) return;

        setButtonLoading(DOM.btnRegister, true);

        try {
            const result = await apiRequest('register', { username, password, countryFlag: country });
            if (result.success) {
                State.setUser(result.user);
                showToast('Account created successfully!', 'success');
                enterDashboard();
            } else {
                showToast(result.error || 'Registration failed', 'error');
                if (result.error && result.error.toLowerCase().includes('username')) {
                    showFieldError('reg-username', result.error);
                }
            }
        } catch (error) {
            showToast(error.message, 'error');
        } finally {
            setButtonLoading(DOM.btnRegister, false);
        }
    });
}

function showFieldError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + '-error');
    const inputEl = document.getElementById(fieldId);
    const group = inputEl?.closest('.form-group');

    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
    }
    if (group) group.classList.add('has-error');
}

function clearFormErrors() {
    document.querySelectorAll('.field-error').forEach(el => {
        el.textContent = '';
        el.classList.remove('visible');
    });
    document.querySelectorAll('.form-group').forEach(el => {
        el.classList.remove('has-error');
    });
}

function setButtonLoading(btn, loading) {
    btn.disabled = loading;
    btn.classList.toggle('loading', loading);
}

/* ============================================
   VIEW 4: DASHBOARD
   ============================================ */
function enterDashboard() {
    switchView('dashboard');
    applyTheme(State.activeSkin);
    updateDashboardUI();
    startLeaderboardRefresh();
    startEventCountdown();
    fetchLeaderboard();
    fetchNews();
    fetchEventStatus();
    fetchUserSkins();
    setTimeout(maybeShowEventPopup, 800);
}

function updateDashboardUI() {
    if (!State.currentUser) return;

    DOM.dashUsername.textContent = State.currentUser.username;
    DOM.dashAvatar.textContent = State.currentUser.username.charAt(0).toUpperCase();
    DOM.previewHighscore.textContent = State.personalBest.toLocaleString();
    DOM.previewRank.textContent = State.globalRank;
    DOM.gameHighscore.textContent = State.personalBest.toLocaleString();

    DOM.previewEndlessTime.textContent = formatTime(State.endlessStats.highestTime);
    DOM.previewEndlessClicks.textContent = State.endlessStats.highestClicks.toLocaleString();
}

function updateMode(mode) {
    State.currentMode = mode;
    const index = mode === '60s' ? 0 : 1;

    DOM.modeSlides.style.transform = `translateX(-${index * 100}%)`;
    DOM.modeSlides.querySelectorAll('.mode-slide').forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    DOM.modeDots.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    DOM.statsGroups.forEach(group => {
        const groupMode = group.id === 'stats-60s' ? '60s' : 'endless';
        group.classList.toggle('active', groupMode === mode);
    });

    if (mode === '60s') {
        DOM.playCardTitle.textContent = 'Click Challenge';
        DOM.playCardDesc.textContent = 'Test your speed in a 60-second clicking marathon. How many clicks can you achieve?';
        DOM.previewRank.textContent = State.globalRank;
    } else {
        DOM.playCardTitle.textContent = 'Endless Marathon';
        DOM.playCardDesc.textContent = 'No time limit. Click as long as you can endure. Save your progress when you quit.';
        DOM.previewRank.textContent = State.endlessRank;
    }
}

function initModeSelector() {
    let touchStartX = 0;
    let touchEndX = 0;

    DOM.modeSlides.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    DOM.modeSlides.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && State.currentMode === '60s') updateMode('endless');
            else if (diff < 0 && State.currentMode === 'endless') updateMode('60s');
        }
    }, { passive: true });

    DOM.modeDots.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const mode = parseInt(dot.dataset.index) === 0 ? '60s' : 'endless';
            updateMode(mode);
        });
    });
}

function initLeaderboardTabs() {
    DOM.lbModeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const mode = tab.dataset.lbMode;
            DOM.lbModeTabs.forEach(t => t.classList.toggle('active', t === tab));

            if (mode === '60s') {
                DOM.lbModeIndicator.classList.remove('endless');
                DOM.lbPanel60s.classList.add('active');
                DOM.lbPanelEndless.classList.remove('active');
            } else {
                DOM.lbModeIndicator.classList.add('endless');
                DOM.lbPanel60s.classList.remove('active');
                DOM.lbPanelEndless.classList.add('active');
            }

            if (mode === '60s' && State.leaderboardData60s.length === 0) {
                fetchLeaderboard();
            } else if (mode === 'endless' && State.leaderboardDataEndless.length === 0) {
                fetchLeaderboard();
            }
        });
    });
}

function initDashboard() {
    initModeSelector();
    initLeaderboardTabs();
    initSkinToggles();

    DOM.navItems.forEach(item => {
        item.addEventListener('click', () => {
            const nav = item.dataset.nav;
            DOM.navItems.forEach(n => n.classList.toggle('active', n === item));

            DOM.sectionPlay.classList.remove('active');
            DOM.sectionLeaderboard.classList.remove('active');
            DOM.sectionEvent.classList.remove('active');
            DOM.sectionCollection.classList.remove('active');

            if (nav === 'play') {
                DOM.sectionPlay.classList.add('active');
            } else if (nav === 'leaderboard') {
                DOM.sectionLeaderboard.classList.add('active');
                fetchLeaderboard();
            } else if (nav === 'event') {
                DOM.sectionEvent.classList.add('active');
                updateEventUI();
            } else if (nav === 'collection') {
                DOM.sectionCollection.classList.add('active');
                updateCollectionUI();
            }
        });
    });

    DOM.btnLogout.addEventListener('click', () => {
        State.clearUser();
        stopLeaderboardRefresh();
        stopEventCountdown();
        clearForms();
        applyTheme('default');
        switchView('auth');
        showToast('Logged out successfully', 'info');
    });

    DOM.btnStartGame.addEventListener('click', startGame);

    DOM.btnPause.addEventListener('click', pauseGame);
    DOM.btnResume.addEventListener('click', resumeGame);
    DOM.btnQuitGame.addEventListener('click', quitGame);
    DOM.btnRestartGame.addEventListener('click', () => {
        closeModal(DOM.modalGameover);
        startGame();
    });
    DOM.btnReturnMenu.addEventListener('click', () => {
        closeModal(DOM.modalGameover);
        DOM.gameArena.classList.remove('active');
    });
    DOM.btnViewLb.addEventListener('click', () => {
        closeModal(DOM.modalGameover);
        DOM.gameArena.classList.remove('active');
        DOM.navItems.forEach(n => n.classList.toggle('active', n.dataset.nav === 'leaderboard'));
        DOM.sectionPlay.classList.remove('active');
        DOM.sectionLeaderboard.classList.add('active');
        fetchLeaderboard();
    });

    DOM.btnGoEvent?.addEventListener('click', () => {
        closeModal(DOM.modalEventPopup);
        DOM.navItems.forEach(n => n.classList.toggle('active', n.dataset.nav === 'event'));
        DOM.sectionPlay.classList.remove('active');
        DOM.sectionLeaderboard.classList.remove('active');
        DOM.sectionCollection.classList.remove('active');
        DOM.sectionEvent.classList.add('active');
        updateEventUI();
    });

    DOM.btnCloseEventPopup?.addEventListener('click', () => {
        State.eventPopupDismissed = true;
        closeModal(DOM.modalEventPopup);
    });

    DOM.btnClaimReward?.addEventListener('click', claimEventReward);

    DOM.gameZone.addEventListener('mousedown', handleGameClick);
    DOM.gameZone.addEventListener('touchstart', handleGameClick, { passive: false });

    DOM.skillBoostContainer?.addEventListener('click', (e) => {
        e.stopPropagation();
        handleSkillClick();
    });

    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', () => {
            const modal = backdrop.closest('.ios-modal');
            if (modal === DOM.modalPause) resumeGame();
        });
    });
}

function clearForms() {
    DOM.formLogin.reset();
    DOM.formRegister.reset();
    clearFormErrors();
}

/* ============================================
   EVENT SYSTEM
   ============================================ */
let eventCountdownInterval = null;

function startEventCountdown() {
    if (eventCountdownInterval) clearInterval(eventCountdownInterval);
    updateEventUI();
    eventCountdownInterval = setInterval(() => {
        if (State.currentView === 'dashboard') {
            updateEventUI();
        }
    }, 1000);
}

function stopEventCountdown() {
    if (eventCountdownInterval) {
        clearInterval(eventCountdownInterval);
        eventCountdownInterval = null;
    }
}

function formatCountdown(ms) {
    if (ms <= 0) return 'Event Ended';
    const days = Math.floor(ms / 86400000);
    const hours = Math.floor((ms % 86400000) / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    return `${hours}h ${minutes}m`;
}

function updateEventUI() {
    if (!DOM.eventCountdown) return;
    const now = Date.now();
    const remaining = State.eventConfig.endTime - now;
    const isActive = State.eventConfig.active && remaining > 0;

    if (!isActive) {
        DOM.eventCountdown.textContent = 'Event Ended';
        DOM.sectionEvent?.classList.add('event-inactive');
        const eventNav = document.querySelector('[data-nav="event"]');
        if (eventNav) eventNav.style.display = 'none';
    } else {
        DOM.eventCountdown.textContent = formatCountdown(remaining);
        const eventNav = document.querySelector('[data-nav="event"]');
        if (eventNav) eventNav.style.display = 'flex';
    }

    const statusText = DOM.eventStatusText;
    if (!statusText) return;

    if (State.eventClaimed) {
        statusText.textContent = 'Reward Claimed';
        statusText.className = 'event-status-value status-claimed';
        if (DOM.btnClaimReward) {
            DOM.btnClaimReward.disabled = true;
            DOM.btnClaimReward.querySelector('.btn-text').textContent = 'Already Claimed';
        }
    } else if (State.eventMissionCompleted) {
        statusText.textContent = 'Completed - Claim Your Reward';
        statusText.className = 'event-status-value status-complete';
        if (DOM.btnClaimReward) {
            DOM.btnClaimReward.disabled = false;
            DOM.btnClaimReward.querySelector('.btn-text').textContent = 'Claim Reward';
        }
    } else if (State.eventMissionFailed) {
        statusText.textContent = 'Mission Failed';
        statusText.className = 'event-status-value status-failed';
        if (DOM.btnClaimReward) {
            DOM.btnClaimReward.disabled = true;
            DOM.btnClaimReward.querySelector('.btn-text').textContent = 'Unavailable';
        }
    } else {
        statusText.textContent = 'In Progress';
        statusText.className = 'event-status-value status-progress';
        if (DOM.btnClaimReward) {
            DOM.btnClaimReward.disabled = true;
            DOM.btnClaimReward.querySelector('.btn-text').textContent = 'Locked';
        }
    }
}

function maybeShowEventPopup() {
    const now = Date.now();
    const isActive = State.eventConfig.active && State.eventConfig.endTime > now;
    if (isActive && !State.eventPopupDismissed && !State.eventClaimed) {
        openModal(DOM.modalEventPopup);
    }
}

async function fetchEventStatus() {
    if (!State.currentUser) return;
    try {
        const result = await apiRequest('getEventStatus', { username: State.currentUser.username }, 'GET');
        if (result.success) {
            State.eventConfig.active = result.eventActive;
            State.eventConfig.endTime = result.eventEndTime;
            State.eventClaimed = result.claimed;
            State.eventMissionCompleted = result.missionCompleted;
            State.eventMissionFailed = result.missionFailed;
            updateEventUI();
        }
    } catch (error) {
        console.error('Failed to fetch event status:', error);
    }
}

async function claimEventReward() {
    if (!State.currentUser || !State.eventMissionCompleted || State.eventClaimed) return;
    try {
        const result = await apiRequest('claimEventReward', {
            username: State.currentUser.username,
            eventId: 'event_background_001',
            proofClicks: State.missionClicksAtEval,
            proofDuration: State.missionDuration
        });
        if (result.success) {
            State.eventClaimed = true;
            if (!State.ownedSkins.includes('dark_premium')) {
                State.ownedSkins.push('dark_premium');
            }
            showToast('Purple Night theme unlocked!', 'success');
            updateCollectionUI();
            updateEventUI();
        } else {
            showToast(result.error || 'Failed to claim reward', 'error');
        }
    } catch (error) {
        showToast('Failed to claim reward. Please try again.', 'error');
    }
}

function evaluateEventMission() {
    if (!State.missionTracking) return;
    State.missionTracking = false;
    State.missionDuration = State.timerValue;
    State.missionClicksAtEval = State.clickCount;

    if (State.clickCount >= 10000) {
        State.eventMissionCompleted = true;
        showToast('Mission complete! Claim your Purple Night theme.', 'success');
    } else {
        State.eventMissionFailed = true;
        showToast('Mission failed. You needed 10,000 clicks in 5 minutes.', 'error');
    }
    updateEventUI();
}

/* ============================================
   SKIN COLLECTION SYSTEM
   ============================================ */
function initSkinToggles() {
    document.querySelectorAll('.btn-skin-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const skinId = e.target.dataset.skin;
            if (State.ownedSkins.includes(skinId) && State.activeSkin !== skinId) {
                setActiveSkin(skinId);
            }
        });
    });
}

function updateCollectionUI() {
    const cards = document.querySelectorAll('.skin-card');
    cards.forEach(card => {
        const skinId = card.dataset.skin;
        const btn = card.querySelector('.btn-skin-toggle');
        const isOwned = State.ownedSkins.includes(skinId);
        const isActive = State.activeSkin === skinId;

        card.classList.toggle('locked', !isOwned);
        card.classList.toggle('active', isActive);

        if (!isOwned) {
            btn.disabled = true;
            btn.textContent = 'Locked';
            btn.classList.remove('active');
        } else if (isActive) {
            btn.disabled = false;
            btn.textContent = 'Active';
            btn.classList.add('active');
        } else {
            btn.disabled = false;
            btn.textContent = 'Equip';
            btn.classList.remove('active');
        }
    });
}

function applyTheme(skinId) {
    if (skinId === 'dark_premium') {
        document.documentElement.setAttribute('data-theme', 'dark_premium');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

async function setActiveSkin(skinId) {
    if (!State.ownedSkins.includes(skinId)) return;
    State.activeSkin = skinId;
    applyTheme(skinId);
    updateCollectionUI();
    if (State.currentUser) {
        try {
            await apiRequest('setActiveSkin', { username: State.currentUser.username, skinId });
        } catch (error) {
            console.error('Failed to save active skin:', error);
        }
    }
}

async function fetchUserSkins() {
    if (!State.currentUser) return;
    try {
        const result = await apiRequest('getUserSkins', { username: State.currentUser.username }, 'GET');
        if (result.success) {
            State.ownedSkins = result.ownedSkins || ['default'];
            State.activeSkin = result.activeSkin || 'default';
            applyTheme(State.activeSkin);
            updateCollectionUI();
        }
    } catch (error) {
        console.error('Failed to fetch user skins:', error);
    }
}

/* ============================================
   NEWS TICKER
   ============================================ */
async function fetchNews() {
    try {
        const result = await apiRequest('getNews', {}, 'GET');
        if (result.success) {
            State.newsText = result.newsText || '';
            State.newsStatus = result.newsStatus || 'OFF';
            updateNewsTicker();
        }
    } catch (error) {
        console.error('Failed to fetch news:', error);
    }
}

function updateNewsTicker() {
    if (!DOM.newsTickerContainer) return;
    if (State.newsStatus === 'OFF' || !State.newsText) {
        DOM.newsTickerContainer.classList.add('hidden');
    } else {
        DOM.newsTickerContainer.classList.remove('hidden');
        DOM.newsTickerText.textContent = State.newsText;
    }
}

/* ============================================
   LEADERBOARD
   ============================================ */
function startLeaderboardRefresh() {
    if (State.leaderboardInterval) clearInterval(State.leaderboardInterval);
    State.leaderboardInterval = setInterval(() => {
        if (State.currentView === 'dashboard') {
            fetchLeaderboard();
            fetchNews();
        }
    }, CONFIG.LEADERBOARD_REFRESH_INTERVAL);
}

function stopLeaderboardRefresh() {
    if (State.leaderboardInterval) {
        clearInterval(State.leaderboardInterval);
        State.leaderboardInterval = null;
    }
}

async function fetchLeaderboard() {
    try {
        const [result60s, resultEndless] = await Promise.all([
            apiRequest('getLeaderboard', { mode: '60s' }, 'GET'),
            apiRequest('getLeaderboard', { mode: 'endless' }, 'GET')
        ]);

        if (result60s.success) {
            State.leaderboardData60s = result60s.data || [];
            renderLeaderboard60s();
        }
        if (resultEndless.success) {
            State.leaderboardDataEndless = resultEndless.data || [];
            renderLeaderboardEndless();
        }

        updateUserRank();
    } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
    }
}

function renderLeaderboard60s() {
    const data = State.leaderboardData60s;
    const container = DOM.lbList60s;

    if (!data || data.length === 0) {
        if (!container.dataset.hasData) {
            container.innerHTML = `<div class="lb-empty">No scores yet. Be the first!</div>`;
        }
        return;
    }

    container.dataset.hasData = 'true';
    const currentUsername = State.currentUser?.username;

    const html = data.map((entry, index) => {
        const rank = index + 1;
        const isCurrentUser = entry.username === currentUsername;
        const flag = CONFIG.FLAGS[entry.countryFlag] || '\u{1F30D}';
        const rankClass = rank <= 3 ? `rank-${rank}` : '';

        const rankDisplay = rank === 1 ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>' :
                           rank === 2 ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>' :
                           rank === 3 ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>' :
                           '#' + rank;

        return `
            <div class="lb-row ${rankClass} ${isCurrentUser ? 'current-user' : ''}" style="animation-delay: ${index * 0.05}s">
                <span class="lb-col-rank">${rankDisplay}</span>
                <span class="lb-col-flag">${flag}</span>
                <span class="lb-col-user">${escapeHtml(entry.username)}</span>
                <span class="lb-col-score">${(entry.highScore || 0).toLocaleString()}</span>
            </div>
        `;
    }).join('');

    if (container.innerHTML !== html) {
        container.innerHTML = html;
    }
}

function renderLeaderboardEndless() {
    const data = State.leaderboardDataEndless;
    const container = DOM.lbListEndless;

    if (!data || data.length === 0) {
        if (!container.dataset.hasData) {
            container.innerHTML = `<div class="lb-empty">No endless scores yet. Be the first!</div>`;
        }
        return;
    }

    container.dataset.hasData = 'true';
    const currentUsername = State.currentUser?.username;

    const html = data.map((entry, index) => {
        const rank = index + 1;
        const isCurrentUser = entry.username === currentUsername;
        const flag = CONFIG.FLAGS[entry.countryFlag] || '\u{1F30D}';
        const timeStr = formatTime(entry.highestTime || 0);

        const rankDisplay = rank === 1 ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>' :
                           rank === 2 ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>' :
                           rank === 3 ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>' :
                           '#' + rank;

        return `
            <div class="lb-row endless-row ${isCurrentUser ? 'current-user' : ''}" style="animation-delay: ${index * 0.05}s">
                <span class="lb-col-rank">${rankDisplay}</span>
                <span class="lb-col-flag">${flag}</span>
                <span class="lb-col-user">${escapeHtml(entry.username)}</span>
                <div class="lb-col-meta">
                    <span class="lb-meta-time">${timeStr}</span>
                    <span class="lb-meta-clicks">${(entry.highScore || 0).toLocaleString()} clicks</span>
                </div>
            </div>
        `;
    }).join('');

    if (container.innerHTML !== html) {
        container.innerHTML = html;
    }
}

function updateUserRank() {
    if (!State.currentUser) return;

    const idx60s = State.leaderboardData60s.findIndex(e => e.username === State.currentUser.username);
    State.globalRank = idx60s >= 0 ? '#' + (idx60s + 1) : '--';

    const idxEndless = State.leaderboardDataEndless.findIndex(e => e.username === State.currentUser.username);
    State.endlessRank = idxEndless >= 0 ? '#' + (idxEndless + 1) : '--';

    if (State.currentMode === '60s') {
        DOM.previewRank.textContent = State.globalRank;
    } else {
        DOM.previewRank.textContent = State.endlessRank;
    }
}

/* ============================================
   SKILL BOOST SYSTEM
   ============================================ */
function calculateMultiplier() {
    const roll = Math.random() * 100;
    if (roll < 1) return 64;
    if (roll < 5) return 32;
    if (roll < 12) return 16;
    if (roll < 25) return 8;
    if (roll < 50) return 4;
    return 2;
}

function updateSkillVisual() {
    if (!DOM.skillRingProgress) return;
    const circumference = 113.097;
    if (State.isSkillActive) return;
    const offset = circumference - (State.skillClicks / State.skillMaxClicks) * circumference;
    DOM.skillRingProgress.style.strokeDashoffset = Math.max(0, offset);
}

function handleSkillClick() {
    if (!State.isSkillReady || State.isSkillActive) return;
    activateSkillBoost();
}

function activateSkillBoost() {
    State.isSkillActive = true;
    State.isSkillReady = false;
    State.skillClicks = 0;
    DOM.skillBoostContainer.classList.remove('skill-ready');
    DOM.skillBoostContainer.classList.add('skill-active');

    let remaining = State.skillDuration;
    const circumference = 113.097;
    DOM.skillRingProgress.style.strokeDashoffset = 0;

    State.skillTimer = setInterval(() => {
        remaining--;
        const offset = ((State.skillDuration - remaining) / State.skillDuration) * circumference;
        DOM.skillRingProgress.style.strokeDashoffset = offset;

        if (remaining <= 0) {
            deactivateSkillBoost();
        }
    }, 1000);
}

function deactivateSkillBoost() {
    if (State.skillTimer) {
        clearInterval(State.skillTimer);
        State.skillTimer = null;
    }
    State.isSkillActive = false;
    State.activeMultiplier = 1;
    State.skillClicks = 0;
    DOM.skillBoostContainer.classList.remove('skill-active');
    DOM.skillRingProgress.style.strokeDashoffset = 113.097;
}

/* ============================================
   GAME ENGINE
   ============================================ */
function formatTime(seconds) {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function resetSkillState() {
    if (State.skillTimer) {
        clearInterval(State.skillTimer);
        State.skillTimer = null;
    }
    State.skillClicks = 0;
    State.isSkillReady = false;
    State.isSkillActive = false;
    State.activeMultiplier = 1;
    DOM.skillBoostContainer?.classList.remove('skill-ready', 'skill-active');
    updateSkillVisual();
}

function startGame() {
    State.gameActive = true;
    State.gamePaused = false;
    State.clickCount = 0;
    DOM.gameClicks.textContent = '0';
    DOM.clickRipples.innerHTML = '';
    resetSkillState();

    if (State.currentMode === '60s') {
        State.timerValue = CONFIG.GAME_DURATION;
        DOM.gameTimer.textContent = CONFIG.GAME_DURATION;
        DOM.timerRingContainer.style.display = 'block';
        DOM.stopwatchDisplay.style.display = 'none';
        updateTimerRing(CONFIG.GAME_DURATION);
        DOM.gameHighscoreLabel.innerHTML = `Personal Best: <strong>${State.personalBest.toLocaleString()}</strong>`;
        DOM.gameZoneHint.textContent = 'Tap anywhere to click!';
    } else {
        State.timerValue = 0;
        DOM.gameStopwatch.textContent = '00:00:00';
        DOM.timerRingContainer.style.display = 'none';
        DOM.stopwatchDisplay.style.display = 'flex';
        DOM.gameHighscoreLabel.innerHTML = `Best: <strong>${State.endlessStats.highestClicks.toLocaleString()}</strong> clicks / <strong>${formatTime(State.endlessStats.highestTime)}</strong>`;
        DOM.gameZoneHint.textContent = 'Tap anywhere to click! Tap pause to save your run.';
        
        if (State.eventConfig.active && !State.eventClaimed && !State.eventMissionFailed) {
            State.missionTracking = true;
        }
    }

    DOM.gameArena.classList.add('active');
    startTimer();

    setTimeout(() => {
        DOM.gameZone.classList.add('clicking');
    }, 2000);
}

function startTimer() {
    if (State.timerInterval) clearInterval(State.timerInterval);

    State.timerInterval = setInterval(() => {
        if (State.gamePaused) return;

        if (State.currentMode === '60s') {
            State.timerValue--;
            DOM.gameTimer.textContent = State.timerValue;
            updateTimerRing(State.timerValue);

            if (State.timerValue <= 10) {
                DOM.gameTimer.style.color = 'var(--color-danger)';
            } else {
                DOM.gameTimer.style.color = '';
            }

            if (State.timerValue <= 0) {
                endGame();
            }
        } else {
            State.timerValue++;
            DOM.gameStopwatch.textContent = formatTime(State.timerValue);
            
            if (State.missionTracking && State.timerValue >= 300) {
                evaluateEventMission();
            }
        }
    }, 1000);
}

function updateTimerRing(seconds) {
    const circumference = 2 * Math.PI * 42;
    const offset = circumference - (seconds / CONFIG.GAME_DURATION) * circumference;
    DOM.timerProgress.style.strokeDashoffset = offset;
}

function handleGameClick(e) {
    if (!State.gameActive || State.gamePaused) return;
    e.preventDefault();

    let added = 1;
    let multiplier = 1;

    if (State.isSkillActive) {
        multiplier = calculateMultiplier();
        added = multiplier;
    } else {
        if (!State.isSkillReady && State.skillClicks < State.skillMaxClicks) {
            State.skillClicks++;
            updateSkillVisual();
            if (State.skillClicks >= State.skillMaxClicks) {
                State.isSkillReady = true;
                DOM.skillBoostContainer.classList.add('skill-ready');
            }
        }
    }

    State.clickCount += added;
    DOM.gameClicks.textContent = State.clickCount.toLocaleString();

    const rect = DOM.gameZone.getBoundingClientRect();
    const x = e.type.includes('touch') ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = e.type.includes('touch') ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    createRipple(x, y);

    if (multiplier > 1) {
        createMultiplierText(x, y, multiplier);
    } else {
        createFloatText(x, y);
    }

    DOM.gameZone.style.transform = 'scale(0.995)';
    setTimeout(() => {
        DOM.gameZone.style.transform = 'scale(1)';
    }, 50);
}

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    DOM.clickRipples.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
}

function createFloatText(x, y) {
    const float = document.createElement('div');
    float.className = 'click-float';
    float.textContent = '+' + State.clickCount;
    float.style.left = x + 'px';
    float.style.top = y + 'px';
    DOM.clickRipples.appendChild(float);
    float.addEventListener('animationend', () => float.remove());
}

function createMultiplierText(x, y, multiplier) {
    const float = document.createElement('div');
    float.className = 'multiplier-pop';
    float.textContent = '+' + multiplier + 'x';
    float.style.left = x + 'px';
    float.style.top = y + 'px';
    DOM.clickRipples.appendChild(float);
    float.addEventListener('animationend', () => float.remove());
}

function pauseGame() {
    if (!State.gameActive) return;
    State.gamePaused = true;
    DOM.btnQuitText.textContent = State.currentMode === 'endless' ? 'Save & Return to Menu' : 'Quit to Menu';
    openModal(DOM.modalPause);
}

function resumeGame() {
    State.gamePaused = false;
    closeModal(DOM.modalPause);
}

function quitGame() {
    if (State.currentMode === 'endless' && State.gameActive) {
        closeModal(DOM.modalPause);
        endGame();
        return;
    }

    State.gameActive = false;
    State.gamePaused = false;
    State.missionTracking = false;
    if (State.timerInterval) clearInterval(State.timerInterval);
    deactivateSkillBoost();
    closeModal(DOM.modalPause);
    DOM.gameArena.classList.remove('active');
    DOM.gameZone.classList.remove('clicking');
}

async function endGame() {
    State.gameActive = false;
    State.gamePaused = false;
    if (State.timerInterval) clearInterval(State.timerInterval);
    deactivateSkillBoost();

    DOM.gameTimer.style.color = '';

    if (State.currentMode === '60s') {
        const isNewBest = State.clickCount > State.personalBest;
        if (isNewBest) {
            State.personalBest = State.clickCount;
            DOM.previewHighscore.textContent = State.personalBest.toLocaleString();
        }

        DOM.modalTitle.textContent = "Time's Up!";
        DOM.modalSubtitle.textContent = 'Great effort! Here are your results.';
        DOM.resultLabelPrimary.textContent = 'Your Score';
        DOM.resultScore.textContent = State.clickCount.toLocaleString();
        DOM.resultLabelSecondary.textContent = 'Personal Best';
        DOM.resultBest.textContent = State.personalBest.toLocaleString();

        if (State.currentUser && isNewBest) {
            try {
                await apiRequest('saveHighScore', {
                    username: State.currentUser.username,
                    highScore: State.clickCount,
                    mode: '60s'
                });
                showToast('New personal best!', 'success');
            } catch (e) {
                console.error('Failed to save score:', e);
                showToast('Score saved locally. Will sync when online.', 'warning');
            }
        }
    } else {
        const duration = State.timerValue;
        const clicks = State.clickCount;
        const isNewClickBest = clicks > State.endlessStats.highestClicks;
        const isNewTimeBest = duration > State.endlessStats.highestTime;

        if (isNewClickBest) State.endlessStats.highestClicks = clicks;
        if (isNewTimeBest) State.endlessStats.highestTime = duration;

        DOM.previewEndlessTime.textContent = formatTime(State.endlessStats.highestTime);
        DOM.previewEndlessClicks.textContent = State.endlessStats.highestClicks.toLocaleString();

        DOM.modalTitle.textContent = 'Session Complete';
        DOM.modalSubtitle.textContent = 'Your endurance run has been recorded.';
        DOM.resultLabelPrimary.textContent = 'Clicks Achieved';
        DOM.resultScore.textContent = clicks.toLocaleString();
        DOM.resultLabelSecondary.textContent = 'Time Survived';
        DOM.resultBest.textContent = formatTime(duration);

        if (State.currentUser) {
            try {
                await apiRequest('saveHighScore', {
                    username: State.currentUser.username,
                    highestClicks: clicks,
                    highestTimeSeconds: duration,
                    mode: 'endless'
                });
                if (isNewClickBest || isNewTimeBest) {
                    showToast('New endless record saved!', 'success');
                }
            } catch (e) {
                console.error('Failed to save endless score:', e);
                showToast('Score saved locally. Will sync when online.', 'warning');
            }
        }
    }

    openModal(DOM.modalGameover);
    fetchLeaderboard();
}

/* ============================================
   MODAL SYSTEM
   ============================================ */
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

/* ============================================
   KEYBOARD SHORTCUTS
   ============================================ */
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (DOM.modalPause.classList.contains('active')) {
                resumeGame();
            } else if (State.gameActive && !State.gamePaused) {
                pauseGame();
            }
        }

        if (e.key === ' ' && State.gameActive && !State.gamePaused) {
            e.preventDefault();
            const rect = DOM.gameZone.getBoundingClientRect();
            const fakeEvent = {
                type: 'mousedown',
                clientX: rect.left + rect.width / 2,
                clientY: rect.top + rect.height / 2,
                preventDefault: () => {}
            };
            handleGameClick(fakeEvent);
        }
    });
}

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    cacheDOM();
    initLoadingScreen();
    initOnboarding();
    initAuth();
    initDashboard();
    initKeyboardShortcuts();
});

DOM.gameZone?.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('dblclick', (e) => {
    if (State.gameActive) e.preventDefault();
}, { passive: false });
