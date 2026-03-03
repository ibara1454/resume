import { registerProfile, type Profile } from './profile';

const profile: Profile = {
  summary: {
    name: {
      first: 'Chiajun',
      last: 'Wang',
    },
    jobTitle: 'フルスタックエンジニア',
    languages: ['英語:B2(ビジネス)', '日本語:C2(熟練)', '中国語:母語'],
    about:
      'フロントエンドを中心としたフルスタックエンジニア。フロントエンド、バックエンド、Android開発の幅広い経験を持ち、7年以上の実務経験があります。堅実なアプリケーション開発スキルを持ち、アーキテクチャや主要フレームワークに精通。クリーンコードの記述と開発体験の向上を得意としています。',
  },
  contact: {
    city: '東京',
    country: '日本',
    email: 'ibara1454@gmail.com',
    githubId: 'ibara1454',
    linkedInId: 'ibara1454',
  },
  experience: [
    {
      jobTitle: 'フルスタックエンジニア',
      company: 'ウーブン・バイ・トヨタ株式会社',
      startDate: '2024.12',
      endDate: '現在',
      techStack: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'React',
        'AWS',
        'Kubernetes',
        'Android',
      ],
      activities: [
        '20名規模のチームでフロントエンド中心のフルスタックエンジニアとして勤務。TypeScript、React、Node.js、AWS、Kubernetesを活用し、包括的な入退室管理システムおよび来訪者登録Webアプリケーションを設計・開発。',
        'プロダクトオーナーと連携してプロダクトビジョンの策定を行い、OKRやプロジェクト要件への落とし込みを推進。チームの方向性をリードする重要な役割を担う。',
        'CI/CDパイプラインと自動テストを組み込んだリリース戦略をゼロから設計・実装し、デプロイ関連の問題を大幅に削減。',
        'フロントエンド開発ガイドラインとベストプラクティスを策定・推進し、フロントエンドエンジニアのメンタリングを実施。コード品質とチームの生産性向上に貢献。',
      ],
      website: 'https://woven.toyota/en/',
    },
    {
      jobTitle:
        'バックエンド/フロントエンドエンジニア → Androidエンジニア → フロントエンドエンジニア',
      company: '株式会社メルカリ',
      startDate: '2021.11',
      endDate: '2024.11',
      positions: [
        {
          jobTitle: 'バックエンド/フロントエンドエンジニア - メルカリ CSツール',
          activities: [
            '約10名のマルチプラットフォームチームでフロントエンド/バックエンドエンジニアとして、GCP、React、PHP、Go、GraphQL、Kubernetesを使用した「メルカリ CSツール」の開発に従事。',
            '「CSツール バックエンド移行」プロジェクトに貢献し、レガシーバックエンドのSQLを統一されたGraphQLサービスに統合。',
            'Skaffoldを活用した開発効率の大幅な改善をリード。変更の反映時間を15〜30分からわずか1分に短縮。',
          ],
        },
        {
          jobTitle: 'Androidエンジニア - メルカリ マーケットプレイス',
          activities: [
            '8名（うちAndroidエンジニア2〜3名）のマルチプラットフォームチームで主要なAndroidエンジニアとして、KotlinとJetpack Composeを使用した「メルカリ」Androidアプリの開発に従事。',
            'ジュニアAndroidエンジニアのメンタリングを行い、スキルと知識の向上を通じてチーム能力の強化に貢献。',
            'デザイナーやプロダクトオーナーと密接に連携し、新規プロジェクトにおける多数のUX改善を提案・実装。',
          ],
        },
        {
          jobTitle: 'フロントエンドエンジニア - メルカリ マーケットプレイス',
          activities: [
            '8名のフロントエンドチームで、TypeScript、React、Jotai、Next.jsを使用した「メルカリ」マーケットプレイスWebサイトの開発に貢献。',
            '各チームへの包括的な理解を活かし、クロスチームプロジェクトの成功に貢献。効果的な連携と成果の提供を実現。',
            '「マイコレクション」プロジェクトのフロントエンド開発者として重要な役割を果たし、バックエンドAPIの設計・レビューを支援し、複数の技術的意思決定をリード。',
          ],
        },
      ],
      website: 'https://about.mercari.com/',
      techStack: [
        'GCP',
        'PHP',
        'Go',
        'GraphQL',
        'Kubernetes',
        'SQL',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Kotlin',
        'Android',
        'Jetpack Compose',
      ],
    },
    {
      jobTitle: 'Androidエンジニア → フロントエンドエンジニア',
      company: 'ヤフー株式会社',
      startDate: '2018.04',
      endDate: '2021.10',
      positions: [
        {
          jobTitle: 'Androidエンジニア - Yahoo!メール Android',
          activities: [
            '10名のチームでAndroidエンジニアとして、RxJava、MVVMアーキテクチャ、Cleanアーキテクチャを使用した「Yahoo!メール」Androidアプリの開発に従事。',
            'OpenID Connect認証方式やIMAPクライアントなどのコア機能を実装。',
            'テスト自動化の強化、リンティングプロセスの改善、CI/CD設定および複数のビルドバリアントの構築に専門知識を活用。',
          ],
        },
        {
          jobTitle: 'フロントエンドエンジニア - Yahoo!メール Web',
          activities: [
            '「Yahoo!メール Web」チームでフロントエンドエンジニア/テックリードとして、「Yahoo!メール Web Reactリニューアル」プロジェクトにてReact、Redux、Kubernetesを活用。',
            'Core Web Vitalsに関するWebサイトのパフォーマンス改善をリードし、スコアの100%以上の向上を達成。',
            '「Yahoo!メール Web Reactリニューアル」プロジェクトのバックエンドインフラをKubernetesを使用してゼロから設計。',
          ],
        },
      ],
      website: 'https://about.yahoo.co.jp/',
      techStack: [
        'Java',
        'Kotlin',
        'Android',
        'Node.js',
        'Kubernetes',
        'TypeScript',
        'React',
        'Node.js',
      ],
    },
  ],
  education: [
    {
      name: '筑波大学',
      degree: '工学修士（コンピュータサイエンス）',
      startDate: '2016.04',
      endDate: '2018.03',
      website: 'https://www.tsukuba.ac.jp/',
    },
    {
      name: '輔仁大学',
      degree: '理学士（数学）',
      startDate: '2007.09',
      endDate: '2012.06',
      website: 'https://www.fju.edu.tw/',
    },
  ],
  skills: [
    { name: 'JavaScript', level: 'skilled' },
    { name: 'TypeScript', level: 'skilled' },
    { name: 'Node.js', level: 'skilled' },
    { name: 'React', level: 'skilled' },
    { name: 'Next.js', level: 'skilled' },
    { name: 'Vue', level: 'skilled' },
    { name: 'Tailwind CSS', level: 'skilled' },
    { name: 'GraphQL', level: 'skilled' },
    { name: 'Java', level: 'skilled' },
    { name: 'Kotlin', level: 'skilled' },
    { name: 'Android', level: 'skilled' },
    { name: 'Jetpack Compose', level: 'skilled' },
    { name: 'GCP', level: 'skilled' },
    { name: 'AWS', level: 'skilled' },
    { name: 'Kubernetes', level: 'skilled' },
    { name: 'Go', level: 'skilled' },
    { name: 'PHP', level: 'skilled' },
    { name: 'Python', level: 'skilled' },
    { name: 'Ruby', level: 'sufficient' },
    { name: 'C++', level: 'sufficient' },
    { name: 'Haskell', level: 'sufficient' },
    { name: 'SQL', level: 'sufficient' },
  ],
  certifications: [
    {
      title: 'CKA',
      description: 'Certified Kubernetes Administrator',
      url: 'https://www.credly.com/badges/636db6a0-c6c1-482e-ba22-0e9784fd9538',
    },
    {
      title: 'CKAD',
      description: 'Certified Kubernetes Application Developer',
      url: 'https://www.credly.com/badges/bfb9b379-765b-478c-bee6-e3c73a0506c1',
    },
    {
      title: 'JSNAD',
      description: 'OpenJS Node.js Application Developer',
      url: 'https://www.credly.com/badges/d3321e53-22b3-4841-94cb-a7fa78c7b075',
    },
    {
      title: 'JSNSD',
      description: 'OpenJS Node.js Services Developer',
      url: 'https://www.credly.com/badges/9545d96a-60ca-436c-a586-0e14b4b31b64',
    },
  ],
};

registerProfile('ja', profile);
