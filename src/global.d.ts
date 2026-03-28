interface ImportMetaEnv {
  readonly VITE_RULES_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare type HeaderNavItem = {
  name: string;
  to: string;
  icon?: Component;
  highlight?: boolean;
};

declare type MemberLinkType = "linkedin" | "github";

declare type Member = {
  name: string;
  company?: string;
  profile: string;
  links: Partial<Record<MemberLinkType, string>>;
};

declare type Rule = {
  id: string;
  name: string;
  severity: "CRITICAL" | "INFO" | "MAJOR" | "MINOR" | "BLOCKER";
  technologies: string[];
  status: string;
};

declare type RuleMeta = {
  technologies: Record<string, string>;
  severities: string[];
  statuses: string[];
  contentUrlTemplate: string | null;
};

declare type RuleBuildInfo = {
  datetime: string;
  gitRef: string | null;
};

declare type RuleList = {
  items: Rule[];
  meta: RuleMeta;
  build: RuleBuildInfo;
};

declare type ChallengeCalendarEventSpeaker = {
  name: string;
  avatar?: string;
  title?: string;
};

declare type ChallengeCalendarEvent = {
  type: string;
  startsAt: string;
  title: string;
  speakers?: ChallengeCalendarEventSpeaker[];
  duration?: string;
};
