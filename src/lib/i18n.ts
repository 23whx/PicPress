export type Language = 'en' | 'zh' | 'ja' | 'ko' | 'ar';

export interface Translations {
  // 通用
  appName: string;
  loading: string;
  
  // 导航
  nav: {
    settings: string;
    about: string;
    home: string;
  };
  
  // 上传区
  dropzone: {
    title: string;
    titleActive: string;
    subtitle: string;
    hint: string;
  };
  
  // 文件列表
  fileList: {
    title: string;
    empty: string;
    original: string;
    compressed: string;
    size: string;
    reduced: string;
    download: string;
    remove: string;
  };
  
  // 控制面板
  controls: {
    title: string;
    format: string;
    quality: string;
    minQuality: string;
    maxQuality: string;
    maxWidth: string;
    maxHeight: string;
    keepEXIF: string;
    keepEXIFHint: string;
    presets: string;
    highQuality: string;
    balanced: string;
    fastCompress: string;
    lockRatio: string;
    placeholder: {
      maxWidth: string;
      maxHeight: string;
    };
    hint: {
      maxWidth: string;
      maxHeight: string;
    };
  };
  
  // 预览面板
  preview: {
    title: string;
    empty: string;
    original: string;
    compressed: string;
    originalSize: string;
    compressedSize: string;
    outputSize: string;
    compressionRatio: string;
    processingTime: string;
    params: string;
    originalDimension: string;
  };
  
  // 工具栏
  toolbar: {
    total: string;
    pending: string;
    completed: string;
    failed: string;
    startCompress: string;
    processing: string;
    exportZip: string;
    clearCompleted: string;
    clearAll: string;
    concurrency: string;
  };
  
  // 关于页面
  about: {
    title: string;
    intro: {
      title: string;
      content: string;
    };
    features: {
      title: string;
      items: string[];
    };
    tech: {
      title: string;
      items: string[];
    };
    privacy: {
      title: string;
      content: string;
    };
    license: {
      title: string;
      content: string;
    };
    contact: {
      title: string;
    };
    disclaimer: {
      title: string;
      content: string;
    };
    backHome: string;
  };
  
  // 设置页面
  settings: {
    title: string;
    performance: {
      title: string;
      concurrency: string;
      concurrencyHint: string;
      hardwareAccel: string;
      hardwareAccelHint: string;
    };
    defaults: {
      title: string;
      format: string;
      quality: string;
      maxWidth: string;
      maxWidthHint: string;
    };
    data: {
      title: string;
      clearHistory: string;
      clearHistoryHint: string;
      resetSettings: string;
      resetSettingsHint: string;
    };
    language: {
      title: string;
      select: string;
    };
    compatibility: {
      title: string;
      content: string;
    };
  };
  
  // 底部
  footer: {
    copyright: string;
    privacy: string;
  };
  
  // 消息
  messages: {
    noFiles: string;
    noCompleted: string;
    exportSuccess: string;
    exportFailed: string;
    unsupportedFormat: string;
  };
}

// 英语翻译
export const en: Translations = {
  appName: 'PicPress',
  loading: 'Loading...',
  
  nav: {
    settings: 'Settings',
    about: 'About',
    home: 'Home',
  },
  
  dropzone: {
    title: 'Drag images here',
    titleActive: 'Drop to upload',
    subtitle: 'or click to select files (JPG, PNG, WebP, AVIF, GIF)',
    hint: 'Batch upload supported, all processing done locally',
  },
  
  fileList: {
    title: 'File List',
    empty: 'No images uploaded yet',
    original: 'Original',
    compressed: 'Compressed',
    size: 'Size',
    reduced: 'reduced',
    download: 'Download',
    remove: 'Remove',
  },
  
  controls: {
    title: 'Compression Settings',
    format: 'Output Format',
    quality: 'Quality',
    minQuality: 'Min',
    maxQuality: 'Max',
    maxWidth: 'Max Width (pixels)',
    maxHeight: 'Max Height (pixels, optional)',
    keepEXIF: 'Keep EXIF data (increases file size)',
    keepEXIFHint: 'Keep EXIF metadata',
    presets: 'Quick Presets',
    highQuality: 'High Quality',
    balanced: 'Balanced',
    fastCompress: 'Fast Compress',
    lockRatio: '🔒 Lock Aspect Ratio',
    placeholder: {
      maxWidth: 'Leave blank = keep original size',
      maxHeight: 'Leave blank = no limit',
    },
    hint: {
      maxWidth: 'E.g., 1920 will scale longest side to 1920px, maintaining aspect ratio',
      maxHeight: 'Usually not needed, leave blank',
    },
  },
  
  preview: {
    title: 'Preview',
    empty: 'Select an image to preview',
    original: 'Original',
    compressed: 'Compressed',
    originalSize: 'Original Size',
    compressedSize: 'Compressed',
    outputSize: 'Output Size',
    compressionRatio: 'Compression Ratio',
    processingTime: 'Processing Time',
    params: 'Parameters used:',
    originalDimension: 'Original size',
  },
  
  toolbar: {
    total: 'Total',
    pending: 'Pending',
    completed: 'Completed',
    failed: 'Failed',
    startCompress: 'Start Compression',
    processing: 'Processing...',
    exportZip: 'Export ZIP',
    clearCompleted: 'Clear Completed',
    clearAll: 'Clear All',
    concurrency: 'Concurrency',
  },
  
  about: {
    title: 'About PicPress',
    intro: {
      title: '🎯 Introduction',
      content: 'PicPress is a batch image compression tool that runs entirely locally. We use modern Web technologies (Web Worker, Canvas API) to process images directly in your browser without uploading to any server, fully protecting your privacy.',
    },
    features: {
      title: '✨ Features',
      items: [
        'Support JPG, PNG, WebP, AVIF, GIF formats',
        'Batch upload, drag & drop, paste from clipboard',
        'Flexible compression settings (quality, size, format)',
        'Real-time preview comparison',
        'Batch export as ZIP',
        'Completely offline processing, privacy protected',
      ],
    },
    tech: {
      title: '🛠️ Tech Stack',
      items: [
        'Astro - Modern static site framework',
        'React - Interactive component development',
        'Tailwind CSS - Utility-first styling',
        'TypeScript - Type safety',
        'Web Worker - Background processing',
        'Zustand - Lightweight state management',
      ],
    },
    privacy: {
      title: '🔒 Privacy Protection',
      content: 'We take your privacy seriously. All image processing is done locally in your browser and never uploaded to any server. We do not collect, store, or analyze your image data. Feel free to use PicPress for personal photos and sensitive images.',
    },
    license: {
      title: '📜 License',
      content: 'PicPress is an open-source project under the MIT License. We encourage community contributions and improvements.',
    },
    contact: {
      title: '📮 Contact Us',
    },
    disclaimer: {
      title: '⚠️ Disclaimer',
      content: 'Please ensure you have legal rights to upload and process images. Do not upload copyrighted or illegal content. PicPress is not responsible for any consequences arising from user actions.',
    },
    backHome: 'Back to Home',
  },
  
  settings: {
    title: 'Settings',
    performance: {
      title: '⚡ Performance',
      concurrency: 'Concurrent Processing',
      concurrencyHint: 'Number of images processed simultaneously. Adjust based on device performance.',
      hardwareAccel: 'Hardware Acceleration',
      hardwareAccelHint: 'Use GPU acceleration (experimental)',
    },
    defaults: {
      title: '🎨 Default Parameters',
      format: 'Default Format',
      quality: 'Default Quality',
      maxWidth: 'Default Max Width (pixels)',
      maxWidthHint: '0 means keep original size',
    },
    data: {
      title: '💾 Data Management',
      clearHistory: 'Clear History',
      clearHistoryHint: 'Delete all saved parameter presets and history',
      resetSettings: 'Reset All Settings',
      resetSettingsHint: 'Restore to default settings',
    },
    language: {
      title: '🌐 Language',
      select: 'Select Language',
    },
    compatibility: {
      title: '🌐 Browser Compatibility',
      content: 'PicPress requires a modern browser. Recommended: latest Chrome, Firefox, Edge, or Safari. Some features (like AVIF) may not work in older browsers.',
    },
  },
  
  footer: {
    copyright: '© 2025 PicPress - All images processed locally, protecting your privacy',
    privacy: 'Privacy protected',
  },
  
  messages: {
    noFiles: 'No files to package',
    noCompleted: 'No completed images to export',
    exportSuccess: 'Export successful',
    exportFailed: 'Export failed',
    unsupportedFormat: 'file(s) with unsupported format',
  },
};

// 中文翻译
export const zh: Translations = {
  appName: 'PicPress',
  loading: '加载中...',
  
  nav: {
    settings: '设置',
    about: '关于',
    home: '首页',
  },
  
  dropzone: {
    title: '拖拽图片到此处',
    titleActive: '松开即可上传',
    subtitle: '或点击选择文件（支持 JPG、PNG、WebP、AVIF、GIF）',
    hint: '支持批量上传，所有处理均在本地完成',
  },
  
  fileList: {
    title: '文件列表',
    empty: '还没有上传图片',
    original: '原始',
    compressed: '压缩后',
    size: '大小',
    reduced: '减少',
    download: '下载',
    remove: '移除',
  },
  
  controls: {
    title: '压缩参数',
    format: '输出格式',
    quality: '质量',
    minQuality: '最小',
    maxQuality: '最大',
    maxWidth: '最长边限制 (像素)',
    maxHeight: '最大高度 (像素，可选)',
    keepEXIF: '保留 EXIF 信息（会增加体积）',
    keepEXIFHint: '保留 EXIF 信息',
    presets: '快速预设',
    highQuality: '高质量',
    balanced: '平衡',
    fastCompress: '快速压缩',
    lockRatio: '🔒 锁定宽高比',
    placeholder: {
      maxWidth: '留空 = 保持原尺寸',
      maxHeight: '留空 = 不限制',
    },
    hint: {
      maxWidth: '例如输入 1920，图片最长边缩放到 1920px，自动保持宽高比',
      maxHeight: '一般不需要设置，留空即可',
    },
  },
  
  preview: {
    title: '预览',
    empty: '选择一个图片查看预览',
    original: '原图',
    compressed: '压缩后',
    originalSize: '原始大小',
    compressedSize: '压缩后',
    outputSize: '输出尺寸',
    compressionRatio: '压缩率',
    processingTime: '处理时间',
    params: '使用的参数：',
    originalDimension: '原始尺寸',
  },
  
  toolbar: {
    total: '总计',
    pending: '待处理',
    completed: '已完成',
    failed: '失败',
    startCompress: '开始压缩',
    processing: '处理中...',
    exportZip: '导出 ZIP',
    clearCompleted: '清除已完成',
    clearAll: '清空列表',
    concurrency: '并发数',
  },
  
  about: {
    title: '关于 PicPress',
    intro: {
      title: '🎯 项目简介',
      content: 'PicPress 是一个完全在本地运行的批量图片压缩工具。我们使用最新的 Web 技术（Web Worker、Canvas API）在您的浏览器中直接处理图片，无需上传到任何服务器，充分保护您的隐私。',
    },
    features: {
      title: '✨ 核心功能',
      items: [
        '支持 JPG、PNG、WebP、AVIF、GIF 等主流格式',
        '批量上传、拖拽导入、粘贴剪贴板',
        '灵活的压缩参数调节（质量、尺寸、格式）',
        '实时预览原图与压缩后的对比',
        '批量导出为 ZIP 文件',
        '完全离线处理，保护隐私',
      ],
    },
    tech: {
      title: '🛠️ 技术栈',
      items: [
        'Astro - 现代化的静态站点框架',
        'React - 交互组件开发',
        'Tailwind CSS - 实用优先的样式框架',
        'TypeScript - 类型安全',
        'Web Worker - 后台处理，不阻塞 UI',
        'Zustand - 轻量级状态管理',
      ],
    },
    privacy: {
      title: '🔒 隐私保护',
      content: '我们非常重视您的隐私。所有图片处理都在您的浏览器本地完成，不会上传到任何服务器。我们不收集、存储或分析您的图片数据。请放心使用 PicPress 处理您的个人照片和敏感图片。',
    },
    license: {
      title: '📜 开源协议',
      content: 'PicPress 是一个开源项目，采用 MIT 协议。我们鼓励社区贡献和改进。',
    },
    contact: {
      title: '📮 联系我们',
    },
    disclaimer: {
      title: '⚠️ 免责声明',
      content: '请确保您拥有上传和处理图片的合法权利。请勿上传受版权保护或违反法律的内容。PicPress 不对用户使用本工具产生的任何后果承担责任。',
    },
    backHome: '返回首页',
  },
  
  settings: {
    title: '设置',
    performance: {
      title: '⚡ 性能设置',
      concurrency: '并发处理数量',
      concurrencyHint: '同时处理的图片数量。根据您的设备性能调整，数值越大处理越快但更耗资源。',
      hardwareAccel: '硬件加速',
      hardwareAccelHint: '使用 GPU 加速图片处理（实验性）',
    },
    defaults: {
      title: '🎨 默认压缩参数',
      format: '默认输出格式',
      quality: '默认质量',
      maxWidth: '默认最长边限制 (像素)',
      maxWidthHint: '0 表示保持原始尺寸',
    },
    data: {
      title: '💾 数据管理',
      clearHistory: '清除历史记录',
      clearHistoryHint: '删除所有保存的参数预设和历史记录',
      resetSettings: '重置所有设置',
      resetSettingsHint: '恢复到默认设置',
    },
    language: {
      title: '🌐 语言设置',
      select: '选择语言',
    },
    compatibility: {
      title: '🌐 浏览器兼容性',
      content: 'PicPress 需要现代浏览器支持。推荐使用最新版本的 Chrome、Firefox、Edge 或 Safari。某些功能（如 AVIF 格式）可能在旧版浏览器中不可用。',
    },
  },
  
  footer: {
    copyright: '© 2025 PicPress - 所有图片均在本地处理，保护您的隐私',
    privacy: '隐私保护',
  },
  
  messages: {
    noFiles: '没有文件可以打包',
    noCompleted: '没有已完成的图片可以导出',
    exportSuccess: '导出成功',
    exportFailed: '导出失败',
    unsupportedFormat: '个文件格式不支持',
  },
};

// 日语翻译
export const ja: Translations = {
  appName: 'PicPress',
  loading: '読み込み中...',
  
  nav: {
    settings: '設定',
    about: '概要',
    home: 'ホーム',
  },
  
  dropzone: {
    title: '画像をドラッグ&ドロップ',
    titleActive: 'ドロップしてアップロード',
    subtitle: 'またはクリックしてファイルを選択（JPG、PNG、WebP、AVIF、GIF対応）',
    hint: '一括アップロード対応、すべての処理はローカルで完了',
  },
  
  fileList: {
    title: 'ファイルリスト',
    empty: '画像がまだアップロードされていません',
    original: '元のサイズ',
    compressed: '圧縮後',
    size: 'サイズ',
    reduced: '削減',
    download: 'ダウンロード',
    remove: '削除',
  },
  
  controls: {
    title: '圧縮設定',
    format: '出力形式',
    quality: '品質',
    minQuality: '最小',
    maxQuality: '最大',
    maxWidth: '最大幅 (ピクセル)',
    maxHeight: '最大高さ (ピクセル、オプション)',
    keepEXIF: 'EXIF情報を保持（ファイルサイズが増加）',
    keepEXIFHint: 'EXIF情報を保持',
    presets: 'クイックプリセット',
    highQuality: '高品質',
    balanced: 'バランス',
    fastCompress: '高速圧縮',
    lockRatio: '🔒 縦横比を固定',
    placeholder: {
      maxWidth: '空白 = 元のサイズを保持',
      maxHeight: '空白 = 制限なし',
    },
    hint: {
      maxWidth: '例：1920を入力すると、最長辺が1920pxにスケール、縦横比を自動保持',
      maxHeight: '通常は設定不要、空白のままで',
    },
  },
  
  preview: {
    title: 'プレビュー',
    empty: 'プレビューする画像を選択してください',
    original: '元の画像',
    compressed: '圧縮後',
    originalSize: '元のサイズ',
    compressedSize: '圧縮後',
    outputSize: '出力サイズ',
    compressionRatio: '圧縮率',
    processingTime: '処理時間',
    params: '使用されたパラメータ：',
    originalDimension: '元のサイズ',
  },
  
  toolbar: {
    total: '合計',
    pending: '保留中',
    completed: '完了',
    failed: '失敗',
    startCompress: '圧縮開始',
    processing: '処理中...',
    exportZip: 'ZIPエクスポート',
    clearCompleted: '完了をクリア',
    clearAll: 'すべてクリア',
    concurrency: '同時実行数',
  },
  
  about: {
    title: 'PicPressについて',
    intro: {
      title: '🎯 プロジェクト紹介',
      content: 'PicPressは完全にローカルで動作する一括画像圧縮ツールです。最新のWeb技術（Web Worker、Canvas API）を使用してブラウザ内で直接画像を処理し、サーバーへのアップロードは一切不要、プライバシーを完全に保護します。',
    },
    features: {
      title: '✨ 主な機能',
      items: [
        'JPG、PNG、WebP、AVIF、GIF形式をサポート',
        '一括アップロード、ドラッグ&ドロップ、クリップボードから貼り付け',
        '柔軟な圧縮パラメータ調整（品質、サイズ、形式）',
        'リアルタイムプレビュー比較',
        'ZIPファイルで一括エクスポート',
        '完全オフライン処理、プライバシー保護',
      ],
    },
    tech: {
      title: '🛠️ 技術スタック',
      items: [
        'Astro - モダンな静的サイトフレームワーク',
        'React - インタラクティブコンポーネント開発',
        'Tailwind CSS - ユーティリティファーストスタイリング',
        'TypeScript - 型安全性',
        'Web Worker - バックグラウンド処理',
        'Zustand - 軽量状態管理',
      ],
    },
    privacy: {
      title: '🔒 プライバシー保護',
      content: 'プライバシーを非常に重視しています。すべての画像処理はブラウザ内でローカルに行われ、サーバーにアップロードされることはありません。画像データの収集、保存、分析は一切行いません。個人写真や機密画像の処理も安心してご利用ください。',
    },
    license: {
      title: '📜 ライセンス',
      content: 'PicPressはMITライセンスのオープンソースプロジェクトです。コミュニティからの貢献と改善を歓迎します。',
    },
    contact: {
      title: '📮 お問い合わせ',
    },
    disclaimer: {
      title: '⚠️ 免責事項',
      content: '画像のアップロードと処理について合法的な権利をお持ちであることを確認してください。著作権で保護されたコンテンツや違法なコンテンツをアップロードしないでください。ユーザーの行為による結果についてPicPressは一切責任を負いません。',
    },
    backHome: 'ホームに戻る',
  },
  
  settings: {
    title: '設定',
    performance: {
      title: '⚡ パフォーマンス',
      concurrency: '同時処理数',
      concurrencyHint: '同時に処理する画像の数。デバイスのパフォーマンスに応じて調整してください。',
      hardwareAccel: 'ハードウェアアクセラレーション',
      hardwareAccelHint: 'GPUアクセラレーションを使用（実験的）',
    },
    defaults: {
      title: '🎨 デフォルトパラメータ',
      format: 'デフォルト形式',
      quality: 'デフォルト品質',
      maxWidth: 'デフォルト最大幅 (ピクセル)',
      maxWidthHint: '0は元のサイズを保持',
    },
    data: {
      title: '💾 データ管理',
      clearHistory: '履歴をクリア',
      clearHistoryHint: '保存されたすべてのパラメータプリセットと履歴を削除',
      resetSettings: 'すべての設定をリセット',
      resetSettingsHint: 'デフォルト設定に戻す',
    },
    language: {
      title: '🌐 言語設定',
      select: '言語を選択',
    },
    compatibility: {
      title: '🌐 ブラウザ互換性',
      content: 'PicPressはモダンブラウザが必要です。推奨：最新のChrome、Firefox、Edge、Safari。一部の機能（AVIFなど）は古いブラウザでは動作しない場合があります。',
    },
  },
  
  footer: {
    copyright: '© 2025 PicPress - すべての画像はローカルで処理され、プライバシーを保護します',
    privacy: 'プライバシー保護',
  },
  
  messages: {
    noFiles: 'パッケージするファイルがありません',
    noCompleted: 'エクスポートする完了画像がありません',
    exportSuccess: 'エクスポート成功',
    exportFailed: 'エクスポート失敗',
    unsupportedFormat: '個のファイル形式がサポートされていません',
  },
};

// 韩语翻译
export const ko: Translations = {
  appName: 'PicPress',
  loading: '로딩 중...',
  
  nav: {
    settings: '설정',
    about: '정보',
    home: '홈',
  },
  
  dropzone: {
    title: '이미지를 여기로 드래그하세요',
    titleActive: '놓아서 업로드',
    subtitle: '또는 클릭하여 파일 선택 (JPG, PNG, WebP, AVIF, GIF 지원)',
    hint: '일괄 업로드 지원, 모든 처리는 로컬에서 완료',
  },
  
  fileList: {
    title: '파일 목록',
    empty: '아직 이미지가 업로드되지 않았습니다',
    original: '원본',
    compressed: '압축 후',
    size: '크기',
    reduced: '감소',
    download: '다운로드',
    remove: '제거',
  },
  
  controls: {
    title: '압축 설정',
    format: '출력 형식',
    quality: '품질',
    minQuality: '최소',
    maxQuality: '최대',
    maxWidth: '최대 너비 (픽셀)',
    maxHeight: '최대 높이 (픽셀, 선택사항)',
    keepEXIF: 'EXIF 정보 유지 (파일 크기 증가)',
    keepEXIFHint: 'EXIF 정보 유지',
    presets: '빠른 프리셋',
    highQuality: '고품질',
    balanced: '균형',
    fastCompress: '빠른 압축',
    lockRatio: '🔒 가로세로 비율 고정',
    placeholder: {
      maxWidth: '비워두기 = 원본 크기 유지',
      maxHeight: '비워두기 = 제한 없음',
    },
    hint: {
      maxWidth: '예: 1920 입력 시 가장 긴 쪽이 1920px로 조정되고 가로세로 비율 자동 유지',
      maxHeight: '일반적으로 설정 불필요, 비워두세요',
    },
  },
  
  preview: {
    title: '미리보기',
    empty: '미리볼 이미지를 선택하세요',
    original: '원본',
    compressed: '압축 후',
    originalSize: '원본 크기',
    compressedSize: '압축 후',
    outputSize: '출력 크기',
    compressionRatio: '압축률',
    processingTime: '처리 시간',
    params: '사용된 매개변수:',
    originalDimension: '원본 크기',
  },
  
  toolbar: {
    total: '전체',
    pending: '대기 중',
    completed: '완료',
    failed: '실패',
    startCompress: '압축 시작',
    processing: '처리 중...',
    exportZip: 'ZIP 내보내기',
    clearCompleted: '완료 항목 지우기',
    clearAll: '모두 지우기',
    concurrency: '동시 실행 수',
  },
  
  about: {
    title: 'PicPress 정보',
    intro: {
      title: '🎯 프로젝트 소개',
      content: 'PicPress는 완전히 로컬에서 실행되는 일괄 이미지 압축 도구입니다. 최신 웹 기술(Web Worker, Canvas API)을 사용하여 브라우저에서 직접 이미지를 처리하며, 서버에 업로드하지 않아 개인정보를 완전히 보호합니다.',
    },
    features: {
      title: '✨ 주요 기능',
      items: [
        'JPG, PNG, WebP, AVIF, GIF 형식 지원',
        '일괄 업로드, 드래그 앤 드롭, 클립보드에서 붙여넣기',
        '유연한 압축 매개변수 조정 (품질, 크기, 형식)',
        '실시간 미리보기 비교',
        'ZIP 파일로 일괄 내보내기',
        '완전 오프라인 처리, 개인정보 보호',
      ],
    },
    tech: {
      title: '🛠️ 기술 스택',
      items: [
        'Astro - 현대적인 정적 사이트 프레임워크',
        'React - 대화형 컴포넌트 개발',
        'Tailwind CSS - 유틸리티 우선 스타일링',
        'TypeScript - 타입 안전성',
        'Web Worker - 백그라운드 처리',
        'Zustand - 경량 상태 관리',
      ],
    },
    privacy: {
      title: '🔒 개인정보 보호',
      content: '개인정보를 매우 중요하게 생각합니다. 모든 이미지 처리는 브라우저 내에서 로컬로 수행되며 서버에 업로드되지 않습니다. 이미지 데이터를 수집, 저장 또는 분석하지 않습니다. 개인 사진과 민감한 이미지를 안심하고 처리하세요.',
    },
    license: {
      title: '📜 라이선스',
      content: 'PicPress는 MIT 라이선스의 오픈 소스 프로젝트입니다. 커뮤니티의 기여와 개선을 환영합니다.',
    },
    contact: {
      title: '📮 문의하기',
    },
    disclaimer: {
      title: '⚠️ 면책 조항',
      content: '이미지를 업로드하고 처리할 법적 권리가 있는지 확인하세요. 저작권으로 보호되거나 불법적인 콘텐츠를 업로드하지 마세요. 사용자 행위로 인한 결과에 대해 PicPress는 책임지지 않습니다.',
    },
    backHome: '홈으로 돌아가기',
  },
  
  settings: {
    title: '설정',
    performance: {
      title: '⚡ 성능',
      concurrency: '동시 처리 수',
      concurrencyHint: '동시에 처리하는 이미지 수입니다. 기기 성능에 따라 조정하세요.',
      hardwareAccel: '하드웨어 가속',
      hardwareAccelHint: 'GPU 가속 사용 (실험적)',
    },
    defaults: {
      title: '🎨 기본 매개변수',
      format: '기본 형식',
      quality: '기본 품질',
      maxWidth: '기본 최대 너비 (픽셀)',
      maxWidthHint: '0은 원본 크기 유지',
    },
    data: {
      title: '💾 데이터 관리',
      clearHistory: '기록 지우기',
      clearHistoryHint: '저장된 모든 매개변수 프리셋과 기록 삭제',
      resetSettings: '모든 설정 재설정',
      resetSettingsHint: '기본 설정으로 복원',
    },
    language: {
      title: '🌐 언어 설정',
      select: '언어 선택',
    },
    compatibility: {
      title: '🌐 브라우저 호환성',
      content: 'PicPress는 최신 브라우저가 필요합니다. 권장: 최신 Chrome, Firefox, Edge 또는 Safari. 일부 기능(예: AVIF)은 구형 브라우저에서 작동하지 않을 수 있습니다.',
    },
  },
  
  footer: {
    copyright: '© 2025 PicPress - 모든 이미지는 로컬에서 처리되어 개인정보를 보호합니다',
    privacy: '개인정보 보호',
  },
  
  messages: {
    noFiles: '압축할 파일이 없습니다',
    noCompleted: '내보낼 완료된 이미지가 없습니다',
    exportSuccess: '내보내기 성공',
    exportFailed: '내보내기 실패',
    unsupportedFormat: '개 파일 형식이 지원되지 않습니다',
  },
};

// 阿拉伯语翻译
export const ar: Translations = {
  appName: 'PicPress',
  loading: 'جاري التحميل...',
  
  nav: {
    settings: 'الإعدادات',
    about: 'حول',
    home: 'الرئيسية',
  },
  
  dropzone: {
    title: 'اسحب الصور هنا',
    titleActive: 'أفلت للتحميل',
    subtitle: 'أو انقر لاختيار الملفات (JPG، PNG، WebP، AVIF، GIF)',
    hint: 'دعم التحميل الجماعي، تتم جميع العمليات محليًا',
  },
  
  fileList: {
    title: 'قائمة الملفات',
    empty: 'لم يتم تحميل أي صور بعد',
    original: 'الأصلي',
    compressed: 'بعد الضغط',
    size: 'الحجم',
    reduced: 'مخفض',
    download: 'تنزيل',
    remove: 'إزالة',
  },
  
  controls: {
    title: 'إعدادات الضغط',
    format: 'تنسيق الإخراج',
    quality: 'الجودة',
    minQuality: 'الأدنى',
    maxQuality: 'الأقصى',
    maxWidth: 'الحد الأقصى للعرض (بكسل)',
    maxHeight: 'الحد الأقصى للارتفاع (بكسل، اختياري)',
    keepEXIF: 'الاحتفاظ ببيانات EXIF (يزيد حجم الملف)',
    keepEXIFHint: 'الاحتفاظ ببيانات EXIF',
    presets: 'الإعدادات المسبقة السريعة',
    highQuality: 'جودة عالية',
    balanced: 'متوازن',
    fastCompress: 'ضغط سريع',
    lockRatio: '🔒 تأمين نسبة العرض',
    placeholder: {
      maxWidth: 'اترك فارغًا = الاحتفاظ بالحجم الأصلي',
      maxHeight: 'اترك فارغًا = بلا حد',
    },
    hint: {
      maxWidth: 'مثال: أدخل 1920، سيتم تغيير حجم أطول ضلع إلى 1920 بكسل مع الحفاظ على نسبة العرض تلقائيًا',
      maxHeight: 'عادة غير مطلوب، اتركه فارغًا',
    },
  },
  
  preview: {
    title: 'معاينة',
    empty: 'حدد صورة للمعاينة',
    original: 'الأصلي',
    compressed: 'المضغوط',
    originalSize: 'الحجم الأصلي',
    compressedSize: 'بعد الضغط',
    outputSize: 'حجم الإخراج',
    compressionRatio: 'نسبة الضغط',
    processingTime: 'وقت المعالجة',
    params: 'المعلمات المستخدمة:',
    originalDimension: 'الحجم الأصلي',
  },
  
  toolbar: {
    total: 'الإجمالي',
    pending: 'قيد الانتظار',
    completed: 'مكتمل',
    failed: 'فشل',
    startCompress: 'بدء الضغط',
    processing: 'جاري المعالجة...',
    exportZip: 'تصدير ZIP',
    clearCompleted: 'مسح المكتملة',
    clearAll: 'مسح الكل',
    concurrency: 'التزامن',
  },
  
  about: {
    title: 'حول PicPress',
    intro: {
      title: '🎯 مقدمة',
      content: 'PicPress هي أداة ضغط صور دفعية تعمل بالكامل محليًا. نستخدم أحدث تقنيات الويب (Web Worker، Canvas API) لمعالجة الصور مباشرة في متصفحك دون التحميل إلى أي خادم، مما يحمي خصوصيتك بشكل كامل.',
    },
    features: {
      title: '✨ الميزات',
      items: [
        'دعم تنسيقات JPG و PNG و WebP و AVIF و GIF',
        'التحميل الجماعي، السحب والإفلات، اللصق من الحافظة',
        'إعدادات ضغط مرنة (الجودة، الحجم، التنسيق)',
        'معاينة مقارنة في الوقت الفعلي',
        'التصدير الجماعي كملف ZIP',
        'المعالجة غير المتصلة بالكامل، حماية الخصوصية',
      ],
    },
    tech: {
      title: '🛠️ التقنيات المستخدمة',
      items: [
        'Astro - إطار عمل مواقع ثابتة حديث',
        'React - تطوير مكونات تفاعلية',
        'Tailwind CSS - تنسيق يركز على الأدوات',
        'TypeScript - أمان الأنواع',
        'Web Worker - معالجة في الخلفية',
        'Zustand - إدارة حالة خفيفة الوزن',
      ],
    },
    privacy: {
      title: '🔒 حماية الخصوصية',
      content: 'نأخذ خصوصيتك على محمل الجد. تتم معالجة جميع الصور محليًا في متصفحك ولا يتم تحميلها إلى أي خادم. نحن لا نجمع أو نخزن أو نحلل بيانات صورك. لا تتردد في استخدام PicPress لصورك الشخصية والحساسة.',
    },
    license: {
      title: '📜 الترخيص',
      content: 'PicPress مشروع مفتوح المصدر بموجب ترخيص MIT. نشجع مساهمات المجتمع والتحسينات.',
    },
    contact: {
      title: '📮 اتصل بنا',
    },
    disclaimer: {
      title: '⚠️ إخلاء المسؤولية',
      content: 'يرجى التأكد من أن لديك حقوق قانونية لتحميل ومعالجة الصور. لا تقم بتحميل محتوى محمي بحقوق الطبع والنشر أو غير قانوني. PicPress غير مسؤول عن أي عواقب ناتجة عن تصرفات المستخدم.',
    },
    backHome: 'العودة إلى الرئيسية',
  },
  
  settings: {
    title: 'الإعدادات',
    performance: {
      title: '⚡ الأداء',
      concurrency: 'المعالجة المتزامنة',
      concurrencyHint: 'عدد الصور المعالجة في وقت واحد. اضبط بناءً على أداء جهازك.',
      hardwareAccel: 'تسريع الأجهزة',
      hardwareAccelHint: 'استخدام تسريع GPU (تجريبي)',
    },
    defaults: {
      title: '🎨 المعلمات الافتراضية',
      format: 'التنسيق الافتراضي',
      quality: 'الجودة الافتراضية',
      maxWidth: 'الحد الأقصى الافتراضي للعرض (بكسل)',
      maxWidthHint: '0 يعني الاحتفاظ بالحجم الأصلي',
    },
    data: {
      title: '💾 إدارة البيانات',
      clearHistory: 'مسح السجل',
      clearHistoryHint: 'حذف جميع الإعدادات المسبقة والسجل المحفوظ',
      resetSettings: 'إعادة تعيين جميع الإعدادات',
      resetSettingsHint: 'الاستعادة إلى الإعدادات الافتراضية',
    },
    language: {
      title: '🌐 إعدادات اللغة',
      select: 'اختر اللغة',
    },
    compatibility: {
      title: '🌐 توافق المتصفح',
      content: 'يتطلب PicPress متصفحًا حديثًا. موصى به: أحدث إصدار من Chrome أو Firefox أو Edge أو Safari. قد لا تعمل بعض الميزات (مثل AVIF) في المتصفحات القديمة.',
    },
  },
  
  footer: {
    copyright: '© 2025 PicPress - تتم معالجة جميع الصور محليًا، حماية خصوصيتك',
    privacy: 'حماية الخصوصية',
  },
  
  messages: {
    noFiles: 'لا توجد ملفات للتغليف',
    noCompleted: 'لا توجد صور مكتملة للتصدير',
    exportSuccess: 'تم التصدير بنجاح',
    exportFailed: 'فشل التصدير',
    unsupportedFormat: 'ملف (ملفات) بتنسيق غير مدعوم',
  },
};

// 所有翻译
export const translations: Record<Language, Translations> = {
  en,
  zh,
  ja,
  ko,
  ar,
};

/**
 * 根据浏览器语言检测默认语言
 */
export function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('ja')) return 'ja';
  if (browserLang.startsWith('ko')) return 'ko';
  if (browserLang.startsWith('ar')) return 'ar';
  
  return 'en'; // 默认英语
}

/**
 * 获取翻译文本
 */
export function getTranslation(language: Language): Translations {
  return translations[language] || translations.en;
}

